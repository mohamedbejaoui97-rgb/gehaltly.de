"use client";

import * as React from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
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

interface BruttoNettoFormProps {
  defaultValues?: Partial<CalculatorInput>;
  onResult: (result: CalculatorResult) => void;
}

/**
 * Core calculator form with progressive disclosure
 * Features:
 * - Combined slider + input for Bruttogehalt
 * - 3-tier progressive disclosure (always/weitere/erweitert)
 * - Real-time calculation on every input change
 * - German labels and number formatting
 */
export function BruttoNettoForm({
  defaultValues,
  onResult,
}: BruttoNettoFormProps) {
  // Merge default values with form defaults
  const initialValues: CalculatorInput = {
    ...DEFAULT_INPUT,
    ...defaultValues,
  };

  const [formData, setFormData] = React.useState<CalculatorInput>(initialValues);
  const [weitereOpen, setWeitereOpen] = React.useState(false);
  const [erweitertOpen, setErweitertOpen] = React.useState(false);

  // Format currency in German format (3.000)
  const formatCurrency = (value: number): string => {
    return new Intl.NumberFormat("de-DE", {
      maximumFractionDigits: 0,
    }).format(value);
  };

  // Parse German formatted number
  const parseCurrency = (value: string): number => {
    return parseFloat(value.replace(/\./g, "").replace(",", "."));
  };

  // Update form data helper
  const updateField = <K extends keyof CalculatorInput>(
    field: K,
    value: CalculatorInput[K]
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // Calculate tax on every form change
  React.useEffect(() => {
    const result = calculateGermanTax(formData);
    onResult(result);
  }, [formData, onResult]);

  return (
    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
      {/* Always Visible Section */}
      <div className="space-y-6">
        {/* Bruttogehalt - Combined Slider + Input */}
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
          <Label htmlFor="abrechnungszeitraum">Abrechnungszeitraum</Label>
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
          <Label htmlFor="steuerklasse">Steuerklasse</Label>
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
              <SelectItem value="1">Steuerklasse 1</SelectItem>
              <SelectItem value="2">Steuerklasse 2</SelectItem>
              <SelectItem value="3">Steuerklasse 3</SelectItem>
              <SelectItem value="4">Steuerklasse 4</SelectItem>
              <SelectItem value="5">Steuerklasse 5</SelectItem>
              <SelectItem value="6">Steuerklasse 6</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Bundesland */}
        <div className="space-y-2">
          <Label htmlFor="bundesland">Bundesland</Label>
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
      </div>

      {/* Weitere Optionen - Collapsible Tier 2 */}
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
        <CollapsibleContent className="space-y-6 pt-6">
          {/* Kirchensteuer */}
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
          </div>

          {/* Alter */}
          <div className="space-y-2">
            <Label htmlFor="alter">Alter</Label>
            <Input
              id="alter"
              type="number"
              min={15}
              max={100}
              value={formData.alter}
              onChange={(e) =>
                updateField("alter", parseInt(e.target.value) || 30)
              }
            />
          </div>

          {/* Kinder */}
          <div className="space-y-2">
            <Label htmlFor="kinder">Anzahl Kinder</Label>
            <Input
              id="kinder"
              type="number"
              min={0}
              max={20}
              value={formData.kinder}
              onChange={(e) =>
                updateField("kinder", parseInt(e.target.value) || 0)
              }
            />
          </div>
        </CollapsibleContent>
      </Collapsible>

      {/* Erweitert - Collapsible Tier 3 */}
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
        <CollapsibleContent className="space-y-6 pt-6">
          {/* Krankenversicherung Typ */}
          <div className="space-y-2">
            <Label htmlFor="krankenversicherung">Krankenversicherung</Label>
            <Select
              value={formData.krankenversicherung}
              onValueChange={(value) =>
                updateField(
                  "krankenversicherung",
                  value as KrankenversicherungTyp
                )
              }
            >
              <SelectTrigger id="krankenversicherung">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="gesetzlich">Gesetzlich</SelectItem>
                <SelectItem value="privat">Privat</SelectItem>
                <SelectItem value="freiwillig">Freiwillig versichert</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* KV Zusatzbeitrag */}
          <div className="space-y-2">
            <Label htmlFor="kvZusatzbeitrag">
              KV-Zusatzbeitrag (%)
            </Label>
            <Input
              id="kvZusatzbeitrag"
              type="number"
              step="0.1"
              min={0}
              max={10}
              value={formData.kvZusatzbeitrag}
              onChange={(e) =>
                updateField(
                  "kvZusatzbeitrag",
                  parseFloat(e.target.value) || 1.7
                )
              }
            />
          </div>

          {/* Steuerfreibetrag */}
          <div className="space-y-2">
            <Label htmlFor="steuerfreibetrag">
              Steuerfreibetrag (€)
            </Label>
            <Input
              id="steuerfreibetrag"
              type="number"
              min={0}
              step={50}
              value={formData.steuerfreibetrag}
              onChange={(e) =>
                updateField(
                  "steuerfreibetrag",
                  parseInt(e.target.value) || 0
                )
              }
            />
          </div>

          {/* Geldwerter Vorteil */}
          <div className="space-y-2">
            <Label htmlFor="geldwerterVorteil">
              Geldwerter Vorteil (€/Monat)
            </Label>
            <Input
              id="geldwerterVorteil"
              type="number"
              min={0}
              step={10}
              value={formData.geldwerterVorteil}
              onChange={(e) =>
                updateField(
                  "geldwerterVorteil",
                  parseInt(e.target.value) || 0
                )
              }
            />
          </div>
        </CollapsibleContent>
      </Collapsible>
    </form>
  );
}
