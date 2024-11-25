import React from "react";

interface StepFourProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  values: any;
}

const StepFour  = ({ values }: StepFourProps) => {
  return (
    <>
      <p className="text-lg font-semibold mb-4 text-black">
        Please Confirm
      </p>
      <p className="text-sm">
        You&apos;re submitting the following data:
      </p>
      <pre className="text-sm bg-slate-50 rounded-lg p-2">{JSON.stringify(values, null, 2)}</pre>
    </>
  );
};

export default StepFour;
