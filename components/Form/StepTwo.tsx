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

interface StepTwoProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
}

const StepTwo: React.FC<StepTwoProps> = ({ control }) => {
  return (
    <>
      <p className="text-lg font-semibold mb-6 text-black">
        How can we contact you?
      </p>
      <FormField
        control={control}
        name="email"
        render={({ field }) => (
          <FormItem className="space-y-2">
            <FormLabel className="text-sm font-medium text-gray-600">
              Email Address
            </FormLabel>
            <FormControl>
              <Input
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="email@example.com"
                {...field}
              />
            </FormControl>
            <FormMessage className="text-red-500 text-sm" />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name="phone"
        render={({ field }) => (
          <FormItem className="space-y-2 mt-4">
            <FormLabel className="text-sm font-medium text-gray-600">
              Phone Number
            </FormLabel>
            <FormControl>
              <Input
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="+267 12 345 678"
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

export default StepTwo;
