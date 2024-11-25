import React from "react";
import { Control } from "react-hook-form";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

interface StepOneProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
}

const StepOne: React.FC<StepOneProps> = ({ control }) => {
  return (
    <>
      <p className="text-lg font-semibold mb-6 text-black">
        Hi, what&apos;s your name?
      </p>
      <FormField
        control={control}
        name="firstName"
        render={({ field }) => (
          <FormItem className="space-y-2">
            <FormLabel className="text-sm font-medium text-gray-600">
              First Name
            </FormLabel>
            <FormControl>
              <Input
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="John"
                {...field}
              />
            </FormControl>
            <FormMessage className="text-red-500 text-sm" />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name="lastName"
        render={({ field }) => (
          <FormItem className="space-y-2 mt-4">
            <FormLabel className="text-sm font-medium text-gray-600">
              Last Name
            </FormLabel>
            <FormControl>
              <Input
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Doe"
                {...field}
              />
            </FormControl>
            <FormMessage className="text-red-500 text-sm" />
          </FormItem>
        )}
      />
    </>
  );
};

export default StepOne;
