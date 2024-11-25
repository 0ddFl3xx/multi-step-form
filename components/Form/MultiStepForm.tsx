"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import FormProgress, { StepConfig } from "./FormProgress";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
import { formSchema } from "@/lib/formSchema";

const formVariants = {
  hidden: {
    opacity: 0,
    scale: 0.95, // Slightly smaller on entry
  },
  visible: {
    opacity: 1,
    scale: 1, // Normal size when visible
  },
  exit: {
    opacity: 0,
    scale: 1.05, // Slightly larger on exit
  },
};

type FormData = z.infer<typeof formSchema>;

const STEPS: StepConfig[] = [
  { title: "Full Name", fields: ["firstName", "lastName"] },
  { title: "Contacts", fields: ["email", "phone"] },
  { title: "Message", fields: ["subject", "message"] },
  { title: "Confirmation", fields: [] },
];

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: "onChange", // Enable validation as user types
  });

  const nextStep = async () => {
    const currentFields = STEPS[step - 1].fields; 
    const isValid = await form.trigger(currentFields as (keyof FormData)[]); // Type Assertion. less ideal

    
    if (isValid ) {
      setCompletedSteps((prev) => [...new Set([...prev, step])]);
      setStep((s) => Math.min(s + 1));
    }
  };

  const prevStep = () => {
    setStep((s) => Math.max(s - 1, 1));
  };

  async function onSubmit(values: FormData) {
    // Validate all fields before final submission
    const isValid = await form.trigger();
    if (!isValid) return;

    alert("Submitted: " + JSON.stringify(values));

    form.reset();
    setStep(1);
    setCompletedSteps([]);
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>
          <FormProgress
            currentStep={step}
            steps={STEPS}
            completedSteps={completedSteps}
          />
        </CardTitle>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
          <CardContent>
            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                variants={formVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{
                  type: "spring",
                  duration: 0.35,
                  bounce: 0.1,
                }}
                className="relative">
                {step === 1 && <StepOne control={form.control} />}
                {step === 2 && <StepTwo control={form.control} />}
                {step === 3 && <StepThree control={form.control} />}
                {step === 4 && <StepFour values={form.getValues()} />}
              </motion.div>
            </AnimatePresence>
          </CardContent>
          <CardFooter className="flex justify-between">
            {step > 1 && (
              <Button type="button" variant="outline" onClick={prevStep}>
                Previous
              </Button>
            )}
            {step <= STEPS.length? (
              <Button type="button" onClick={nextStep}>
                Next
              </Button>
            ) : (
              <Button type="submit" disabled={form.formState.isSubmitting}>
                {form.formState.isSubmitting ? "Submitting..." : "Submit"}
              </Button>
            )}
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
};

export default MultiStepForm;
