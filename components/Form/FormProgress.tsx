import { Check } from "lucide-react";

export interface StepConfig {
  title: string;
  fields: string[];
}

interface StepIndicatorProps {
  stepNumber: number;
  isActive: boolean;
  isCompleted: boolean;
}

interface FormProgressProps {
  currentStep: number;
  steps: StepConfig[];
  completedSteps: number[];
}

const StepIndicator = ({
  stepNumber,
  isActive,
  isCompleted,
}: StepIndicatorProps) => {
  return (
    <div
      className={`size-8 shrink-0 mx-[-1px] p-1.5 flex items-center justify-center rounded-full transition-colors duration-200
        ${
          isCompleted ? "bg-green-600" : isActive ? "bg-black" : "bg-gray-400"
        }`}>
      {isCompleted ? (
        <Check className="size-4 text-white" />
      ) : (
        <span className="text-base text-white font-bold">{stepNumber}</span>
      )}
    </div>
  );
};

const FormProgress = ({
  currentStep,
  steps,
  completedSteps,
}: FormProgressProps) => {
  return (
    <div className="flex items-start pb-1">
      {steps.map((stepConfig, index) => {
        const stepNumber = index + 1;
        const isActive = currentStep === stepNumber;
        const isCompleted = completedSteps.includes(stepNumber);

        return (
          <div
            key={stepNumber}
            className={`w-full ${stepNumber === steps.length ? "auto" : ""}`}>
            <div className="flex items-center w-full">
              <StepIndicator
                stepNumber={stepNumber}
                isActive={isActive}
                isCompleted={isCompleted}
              />

              {stepNumber !== steps.length && (
                <div
                  className={`
                    w-full h-[3px] mx-4 rounded-lg 
                    transition-colors duration-200
                    ${
                      currentStep > stepNumber || isCompleted
                        ? "bg-green-600"
                        : currentStep === stepNumber
                        ? "bg-black"
                        : "bg-gray-300"
                    }
                  `}
                />
              )}
            </div>

            <div
              className={`mt-2 ${stepNumber !== steps.length ? "mr-4" : ""}`}>
              <h6
                className={`
                  text-base font-bold 
                  transition-colors duration-200
                  ${
                    isCompleted
                      ? "text-green-600"
                      : isActive
                      ? "text-black"
                      : "text-gray-300"
                  }
                `}>
                {stepConfig.title}
              </h6>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FormProgress;
