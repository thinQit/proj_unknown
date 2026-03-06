"use client";

import React, { useMemo, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

interface MortgageCalculatorProps {
  className?: string;
}

export default function MortgageCalculator({ className = "" }: Partial<MortgageCalculatorProps>) {
  const [price, setPrice] = useState(1500000);
  const [downPayment, setDownPayment] = useState(300000);
  const [rate, setRate] = useState(5.8);
  const [term, setTerm] = useState(30);

  const { monthlyPayment, interestTotal, principal } = useMemo(() => {
    const loan = price - downPayment;
    const monthlyRate = rate / 100 / 12;
    const payments = term * 12;
    const numerator = monthlyRate * Math.pow(1 + monthlyRate, payments);
    const monthly = loan * (numerator / (Math.pow(1 + monthlyRate, payments) - 1));
    const totalPayment = monthly * payments;
    const interest = totalPayment - loan;
    return {
      monthlyPayment: Number.isFinite(monthly) ? monthly : 0,
      interestTotal: Number.isFinite(interest) ? interest : 0,
      principal: loan,
    };
  }, [price, downPayment, rate, term]);

  const principalPct = principal / (principal + interestTotal || 1);

  return (
    <div className={cn("rounded-2xl border border-border bg-white p-6 shadow-sm", className)}>
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold text-[#1B2838]" style={{ fontFamily: "DM Serif Display" }}>
              Mortgage Estimator
            </h3>
            <p className="text-sm text-[#1B2838]/70">
              Estimate your monthly investment for premium Bay Area properties.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="price">Home Price</Label>
              <Input
                id="price"
                type="number"
                value={price}
                onChange={(event) => setPrice(Number(event.target.value))}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="down">Down Payment</Label>
              <Input
                id="down"
                type="number"
                value={downPayment}
                onChange={(event) => setDownPayment(Number(event.target.value))}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="rate">Interest Rate %</Label>
              <Input id="rate" type="number" value={rate} step="0.1" onChange={(event) => setRate(Number(event.target.value))} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="term">Term (Years)</Label>
              <Input id="term" type="number" value={term} onChange={(event) => setTerm(Number(event.target.value))} />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-4 rounded-xl bg-[#FAF9F6] p-6">
          <svg width="160" height="160" viewBox="0 0 36 36" className="rotate-[-90deg]">
            <path
              className="text-[#C5A572]/20"
              stroke="currentColor"
              strokeWidth="3.5"
              fill="none"
              d="M18 2.0845a 15.9155 15.9155 0 0 1 0 31.831a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <path
              className="text-[#C5A572]"
              stroke="currentColor"
              strokeWidth="3.5"
              strokeDasharray={Math.round(principalPct * 100) + ", 100"}
              strokeLinecap="round"
              fill="none"
              d="M18 2.0845a 15.9155 15.9155 0 0 1 0 31.831a 15.9155 15.9155 0 0 1 0 -31.831"
            />
          </svg>
          <div className="text-center">
            <p className="text-xs uppercase tracking-wide text-[#1B2838]/60">Estimated Monthly</p>
            <p className="text-2xl font-semibold text-[#1B2838]">
              ${Math.round(monthlyPayment).toLocaleString()}
            </p>
            <div className="mt-3 text-xs text-[#1B2838]/60">
              Principal: ${Math.round(principal).toLocaleString()} · Interest: ${Math.round(interestTotal).toLocaleString()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
