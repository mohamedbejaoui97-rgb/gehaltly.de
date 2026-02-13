"use client";

import * as React from "react";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";

interface SliderInputProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  min: number;
  max: number;
  step: number;
  formatValue?: (value: number) => string;
  parseValue?: (value: string) => number;
}

/**
 * Combined Slider + Input component with bidirectional sync
 * Displays a slider and numeric input that stay in sync
 */
export function SliderInput({
  label,
  value,
  onChange,
  min,
  max,
  step,
  formatValue,
  parseValue,
}: SliderInputProps) {
  const [inputValue, setInputValue] = React.useState(
    formatValue ? formatValue(value) : value.toString()
  );

  // Update input when value prop changes
  React.useEffect(() => {
    setInputValue(formatValue ? formatValue(value) : value.toString());
  }, [value, formatValue]);

  const handleSliderChange = (values: number[]) => {
    const newValue = values[0];
    onChange(newValue);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value;
    setInputValue(rawValue);

    // Parse the value (remove formatting)
    const numValue = parseValue
      ? parseValue(rawValue)
      : parseFloat(rawValue.replace(/\./g, "").replace(",", "."));

    // Validate and update if valid
    if (!isNaN(numValue) && numValue >= min && numValue <= max) {
      onChange(numValue);
    }
  };

  const handleInputBlur = () => {
    // On blur, ensure the value is within range and properly formatted
    let numValue = parseValue
      ? parseValue(inputValue)
      : parseFloat(inputValue.replace(/\./g, "").replace(",", "."));

    if (isNaN(numValue)) {
      numValue = value;
    } else if (numValue < min) {
      numValue = min;
    } else if (numValue > max) {
      numValue = max;
    }

    // Round to step
    numValue = Math.round(numValue / step) * step;
    onChange(numValue);
    setInputValue(formatValue ? formatValue(numValue) : numValue.toString());
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <Label htmlFor={`slider-${label}`}>{label}</Label>
        <Input
          id={`input-${label}`}
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          className="h-9 w-32 text-right"
        />
      </div>
      <Slider
        id={`slider-${label}`}
        min={min}
        max={max}
        step={step}
        value={[value]}
        onValueChange={handleSliderChange}
        className="w-full"
      />
      <div className="flex justify-between text-xs text-muted-foreground">
        <span>{formatValue ? formatValue(min) : min}</span>
        <span>{formatValue ? formatValue(max) : max}</span>
      </div>
    </div>
  );
}
