"use client";

import * as React from "react";
import { ChevronDown, ChevronUp, Info } from "lucide-react";
import {
  DEFAULT_INPUT,
  calculateGermanTax,
  type CalculatorInput,
  type CalculatorResult,
  type Steuerklasse,
  type Bundesland,
  type Abrechnungszeitraum,
  type KrankenversicherungTyp,
} from "@/lib/tax";
import { BUNDESLAENDER } from "@/lib/tax/bundeslaender";
import { SliderInput } from "./SliderInput";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { KrankenkassenTable } from "./KrankenkassenTable";

interface BruttoNettoFormProps {
  defaultValues?: Partial<CalculatorInput>;
  onResult: (result: CalculatorResult) => void;
}

/** Tooltip help texts for each field */
const TOOLTIPS: Record<string, string> = {
  bruttogehalt:
    "Ihr monatliches oder jährliches Bruttogehalt vor allen Abzügen. Finden Sie den Betrag auf Ihrem Arbeitsvertrag oder Ihrer Gehaltsabrechnung.",
  abrechnungszeitraum:
    "Wählen Sie, ob Sie Ihr Gehalt monatlich oder jährlich eingeben möchten. Die Berechnung wird entsprechend angepasst.",
  steuerklasse:
    "Ihre Steuerklasse bestimmt die Höhe der Lohnsteuer. Klasse 1: Ledig, 2: Alleinerziehend, 3: Verheiratet (Hauptverdiener), 4: Verheiratet (gleich), 5: Verheiratet (Geringverdiener), 6: Zweitjob.",
  bundesland:
    "Ihr Bundesland beeinflusst den Kirchensteuersatz (8% oder 9%) und die Pflegeversicherung (Sachsen hat einen Sondersatz).",
  kirchensteuer:
    "Sind Sie Mitglied einer Kirche, die Kirchensteuer erhebt? Die Kirchensteuer beträgt 8% (Bayern, Baden-Württemberg) oder 9% der Lohnsteuer.",
  alter:
    "Ihr Alter beeinflusst die Pflegeversicherung. Ab 23 Jahren zahlen Kinderlose einen Zuschlag von 0,6%.",
  kinder:
    "Anzahl Ihrer Kinder. Kinder reduzieren die Pflegeversicherung und wirken sich über den Kinderfreibetrag auf die Steuer aus.",
  krankenversicherung:
    "Gesetzlich: Pflichtversichert in einer GKV. Privat: Privatversichert (PKV). Freiwillig: Freiwillig gesetzlich versichert.",
  kvZusatzbeitrag:
    "Der kassenindividuelle Zusatzbeitrag Ihrer Krankenkasse. Der Durchschnitt 2026 beträgt 2,9%. Klicken Sie auf das Info-Symbol für eine Liste aller Kassen.",
  pvkBeitrag:
    "Ihr monatlicher Beitrag zur privaten Krankenversicherung (PKV). Diesen finden Sie auf Ihrer PKV-Rechnung.",
  pvkArbeitgeberzuschuss:
    "Ihr Arbeitgeber zahlt einen Zuschuss zu Ihrer PKV, maximal die Hälfte des GKV-Höchstbeitrags.",
  rentenversicherung:
    "Pflichtversichert: Beitrag wird automatisch abgeführt (9,3%). Nicht pflichtversichert: z.B. Beamte, Selbstständige, Minijobber.",
  arbeitslosenversicherung:
    "Pflichtversichert: Beitrag wird automatisch abgeführt (1,3%). Nicht pflichtversichert: z.B. Beamte, Selbstständige.",
  steuerfreibetrag:
    "Jährlicher Steuerfreibetrag, z.B. durch einen Antrag beim Finanzamt. Wird vom zu versteuernden Einkommen abgezogen.",
  geldwerterVorteil:
    "Monatlicher geldwerter Vorteil, z.B. durch einen Firmenwagen (1%-Regelung). Erhöht die Steuerlast, aber nicht das ausgezahlte Gehalt.",
};

/** Info icon with tooltip */
function FieldTooltip({ field }: { field: string }) {
  const text = TOOLTIPS[field];
  if (!text) return null;

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button type="button" className="inline-flex ml-1.5 text-gray-400 hover:text-gray-600 transition-colors">
          <Info className="h-3.5 w-3.5" />
        </button>
      </TooltipTrigger>
      <TooltipContent side="top" className="max-w-[280px] text-sm">
        {text}
      </TooltipContent>
    </Tooltip>
  );
}

/** Label with tooltip */
function FieldLabel({ htmlFor, field, children }: { htmlFor: string; field: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center">
      <Label htmlFor={htmlFor}>{children}</Label>
      <FieldTooltip field={field} />
    </div>
  );
}

/**
 * Numeric input that allows clearing the field while typing.
 */
function NumericField({
  id,
  value,
  onChange,
  min,
  max,
  step,
  defaultValue,
  isFloat = false,
}: {
  id: string;
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  step?: number | string;
  defaultValue: number;
  isFloat?: boolean;
}) {
  const [display, setDisplay] = React.useState(value.toString());

  React.useEffect(() => {
    setDisplay(value.toString());
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;
    setDisplay(raw);
    const num = isFloat ? parseFloat(raw) : parseInt(raw);
    if (!isNaN(num)) {
      onChange(num);
    }
  };

  const handleBlur = () => {
    const num = isFloat ? parseFloat(display) : parseInt(display);
    if (isNaN(num) || display.trim() === "") {
      onChange(defaultValue);
      setDisplay(defaultValue.toString());
    } else {
      const clamped = Math.min(
        Math.max(num, min ?? -Infinity),
        max ?? Infinity
      );
      onChange(clamped);
      setDisplay(clamped.toString());
    }
  };

  return (
    <Input
      id={id}
      type="number"
      min={min}
      max={max}
      step={step}
      value={display}
      onChange={handleChange}
      onBlur={handleBlur}
    />
  );
}

export function BruttoNettoForm({
  defaultValues,
  onResult,
}: BruttoNettoFormProps) {
  const initialValues: CalculatorInput = {
    ...DEFAULT_INPUT,
    ...defaultValues,
  };

  const [formData, setFormData] = React.useState<CalculatorInput>(initialValues);
  const [weitereOpen, setWeitereOpen] = React.useState(false);
  const [erweitertOpen, setErweitertOpen] = React.useState(false);

  const formatCurrency = (value: number): string => {
    return new Intl.NumberFormat("de-DE", {
      maximumFractionDigits: 0,
    }).format(value);
  };

  const parseCurrency = (value: string): number => {
    return parseFloat(value.replace(/\./g, "").replace(",", "."));
  };

  const updateField = <K extends keyof CalculatorInput>(
    field: K,
    value: CalculatorInput[K]
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  React.useEffect(() => {
    const result = calculateGermanTax(formData);
    onResult(result);
  }, [formData, onResult]);

  const isPKV = formData.krankenversicherung === "privat";

  return (
    <TooltipProvider delayDuration={200}>
      <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
        {/* ===== Always Visible Section ===== */}
        <div className="space-y-3">
          {/* Bruttogehalt */}
          <SliderInput
            label="Bruttogehalt"
            value={formData.bruttoeinkommen}
            onChange={(value) => updateField("bruttoeinkommen", value)}
            min={500}
            max={15000}
            step={50}
            formatValue={formatCurrency}
            parseValue={parseCurrency}
          />

          {/* Abrechnungszeitraum */}
          <div className="space-y-2">
            <FieldLabel htmlFor="abrechnungszeitraum" field="abrechnungszeitraum">
              Abrechnungszeitraum
            </FieldLabel>
            <Select
              value={formData.abrechnungszeitraum}
              onValueChange={(value) =>
                updateField("abrechnungszeitraum", value as Abrechnungszeitraum)
              }
            >
              <SelectTrigger id="abrechnungszeitraum">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="monat">Monatlich</SelectItem>
                <SelectItem value="jahr">Jährlich</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Steuerklasse */}
          <div className="space-y-2">
            <FieldLabel htmlFor="steuerklasse" field="steuerklasse">
              Steuerklasse
            </FieldLabel>
            <Select
              value={formData.steuerklasse.toString()}
              onValueChange={(value) =>
                updateField("steuerklasse", parseInt(value) as Steuerklasse)
              }
            >
              <SelectTrigger id="steuerklasse">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">Steuerklasse 1 - Ledig</SelectItem>
                <SelectItem value="2">Steuerklasse 2 - Alleinerziehend</SelectItem>
                <SelectItem value="3">Steuerklasse 3 - Verheiratet (Hauptverdiener)</SelectItem>
                <SelectItem value="4">Steuerklasse 4 - Verheiratet (gleich)</SelectItem>
                <SelectItem value="5">Steuerklasse 5 - Verheiratet (Geringverdiener)</SelectItem>
                <SelectItem value="6">Steuerklasse 6 - Zweitjob</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Bundesland */}
          <div className="space-y-2">
            <FieldLabel htmlFor="bundesland" field="bundesland">
              Bundesland
            </FieldLabel>
            <Select
              value={formData.bundesland}
              onValueChange={(value) =>
                updateField("bundesland", value as Bundesland)
              }
            >
              <SelectTrigger id="bundesland">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(BUNDESLAENDER).map(([key, config]) => (
                  <SelectItem key={key} value={key}>
                    {config.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Kirchensteuer - moved to always visible */}
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="kirchensteuer"
              checked={formData.kirchensteuer}
              onChange={(e) => updateField("kirchensteuer", e.target.checked)}
              className="h-4 w-4 rounded border-gray-300"
            />
            <Label htmlFor="kirchensteuer" className="cursor-pointer">
              Kirchensteuerpflichtig
            </Label>
            <FieldTooltip field="kirchensteuer" />
          </div>

          {/* Alter - moved to always visible */}
          <div className="space-y-2">
            <FieldLabel htmlFor="alter" field="alter">
              Alter
            </FieldLabel>
            <NumericField
              id="alter"
              min={15}
              max={100}
              value={formData.alter}
              defaultValue={30}
              onChange={(val) => updateField("alter", val)}
            />
          </div>
        </div>

        {/* ===== Weitere Optionen - Tier 2 ===== */}
        <Collapsible open={weitereOpen} onOpenChange={setWeitereOpen}>
          <CollapsibleTrigger asChild>
            <Button
              variant="outline"
              className="w-full justify-between"
              type="button"
            >
              <span>Weitere Optionen</span>
              {weitereOpen ? (
                <ChevronUp className="h-4 w-4" />
              ) : (
                <ChevronDown className="h-4 w-4" />
              )}
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="space-y-3 pt-3">
            {/* Kinder */}
            <div className="space-y-2">
              <FieldLabel htmlFor="kinder" field="kinder">
                Anzahl Kinder
              </FieldLabel>
              <NumericField
                id="kinder"
                min={0}
                max={20}
                value={formData.kinder}
                defaultValue={0}
                onChange={(val) => updateField("kinder", val)}
              />
            </div>

            {/* Krankenversicherung - moved from Tier 3 */}
            <div className="space-y-2">
              <FieldLabel htmlFor="krankenversicherung" field="krankenversicherung">
                Krankenversicherung
              </FieldLabel>
              <Select
                value={formData.krankenversicherung}
                onValueChange={(value) =>
                  updateField("krankenversicherung", value as KrankenversicherungTyp)
                }
              >
                <SelectTrigger id="krankenversicherung">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="gesetzlich">Gesetzlich versichert (GKV)</SelectItem>
                  <SelectItem value="privat">Privat versichert (PKV)</SelectItem>
                  <SelectItem value="freiwillig">Freiwillig gesetzlich versichert</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* KV-Zusatzbeitrag - shown for GKV/freiwillig */}
            {!isPKV && (
              <div className="space-y-2">
                <div className="flex items-center">
                  <FieldLabel htmlFor="kvZusatzbeitrag" field="kvZusatzbeitrag">
                    KV-Zusatzbeitrag (%)
                  </FieldLabel>
                  <KrankenkassenTable
                    currentRate={formData.kvZusatzbeitrag}
                    onSelect={(rate) => updateField("kvZusatzbeitrag", rate)}
                  />
                </div>
                <NumericField
                  id="kvZusatzbeitrag"
                  step="0.1"
                  min={0}
                  max={10}
                  value={formData.kvZusatzbeitrag}
                  defaultValue={2.9}
                  isFloat
                  onChange={(val) => updateField("kvZusatzbeitrag", val)}
                />
                <p className="text-xs text-muted-foreground">
                  Durchschnitt 2026: 2,9%
                </p>
              </div>
            )}

            {/* PKV fields - conditional on privat */}
            {isPKV && (
              <>
                <div className="space-y-2">
                  <FieldLabel htmlFor="pvkBeitrag" field="pvkBeitrag">
                    PKV-Beitrag (€/Monat)
                  </FieldLabel>
                  <NumericField
                    id="pvkBeitrag"
                    min={0}
                    max={2000}
                    step={10}
                    value={formData.pvkBeitrag ?? 300}
                    defaultValue={300}
                    onChange={(val) => updateField("pvkBeitrag", val)}
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="pvkArbeitgeberzuschuss"
                    checked={formData.pvkArbeitgeberzuschuss ?? true}
                    onChange={(e) =>
                      updateField("pvkArbeitgeberzuschuss", e.target.checked)
                    }
                    className="h-4 w-4 rounded border-gray-300"
                  />
                  <Label htmlFor="pvkArbeitgeberzuschuss" className="cursor-pointer">
                    Arbeitgeberzuschuss zur PKV
                  </Label>
                  <FieldTooltip field="pvkArbeitgeberzuschuss" />
                </div>
              </>
            )}
          </CollapsibleContent>
        </Collapsible>

        {/* ===== Erweiterte Optionen - Tier 3 ===== */}
        <Collapsible open={erweitertOpen} onOpenChange={setErweitertOpen}>
          <CollapsibleTrigger asChild>
            <Button
              variant="outline"
              className="w-full justify-between"
              type="button"
            >
              <span>Erweiterte Optionen</span>
              {erweitertOpen ? (
                <ChevronUp className="h-4 w-4" />
              ) : (
                <ChevronDown className="h-4 w-4" />
              )}
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="space-y-3 pt-3">
            {/* Rentenversicherung */}
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="rentenversicherungPflicht"
                checked={formData.rentenversicherungPflicht ?? true}
                onChange={(e) =>
                  updateField("rentenversicherungPflicht", e.target.checked)
                }
                className="h-4 w-4 rounded border-gray-300"
              />
              <Label htmlFor="rentenversicherungPflicht" className="cursor-pointer">
                Rentenversicherungspflichtig
              </Label>
              <FieldTooltip field="rentenversicherung" />
            </div>

            {/* Arbeitslosenversicherung */}
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="arbeitslosenversicherungPflicht"
                checked={formData.arbeitslosenversicherungPflicht ?? true}
                onChange={(e) =>
                  updateField("arbeitslosenversicherungPflicht", e.target.checked)
                }
                className="h-4 w-4 rounded border-gray-300"
              />
              <Label htmlFor="arbeitslosenversicherungPflicht" className="cursor-pointer">
                Arbeitslosenversicherungspflichtig
              </Label>
              <FieldTooltip field="arbeitslosenversicherung" />
            </div>

            {/* Steuerfreibetrag */}
            <div className="space-y-2">
              <FieldLabel htmlFor="steuerfreibetrag" field="steuerfreibetrag">
                Steuerfreibetrag (€/Jahr)
              </FieldLabel>
              <NumericField
                id="steuerfreibetrag"
                min={0}
                step={50}
                value={formData.steuerfreibetrag}
                defaultValue={0}
                onChange={(val) => updateField("steuerfreibetrag", val)}
              />
            </div>

            {/* Geldwerter Vorteil */}
            <div className="space-y-2">
              <FieldLabel htmlFor="geldwerterVorteil" field="geldwerterVorteil">
                Geldwerter Vorteil (€/Monat)
              </FieldLabel>
              <NumericField
                id="geldwerterVorteil"
                min={0}
                step={10}
                value={formData.geldwerterVorteil}
                defaultValue={0}
                onChange={(val) => updateField("geldwerterVorteil", val)}
              />
            </div>
          </CollapsibleContent>
        </Collapsible>
      </form>
    </TooltipProvider>
  );
}
