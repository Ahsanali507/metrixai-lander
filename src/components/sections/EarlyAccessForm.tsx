"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { CheckCircle, Loader2 } from "lucide-react";
import { Button, Input, Card } from "@/components/ui";
import { events } from "@/lib/analytics";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().min(2, "Company name must be at least 2 characters"),
  role: z.string().min(2, "Job title must be at least 2 characters"),
});

type FormData = z.infer<typeof formSchema>;

export function EarlyAccessForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch("/api/early-access", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSubmitted(true);
        events.formSubmit("early-access");
      }
    } catch (error) {
      console.error("Form submission error:", error);
    }
  };

  if (isSubmitted) {
    return (
      <Card variant="elevated" className="text-center py-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            You&apos;re on the List!
          </h3>
          <p className="text-gray-600 max-w-md mx-auto">
            Thanks for joining our early access program. We&apos;ll be in touch soon
            with your exclusive demo invitation.
          </p>
        </motion.div>
      </Card>
    );
  }

  return (
    <Card variant="elevated" className="max-w-lg mx-auto">
      <h3 className="text-2xl font-bold text-gray-900 mb-2">
        Request Early Access
      </h3>
      <p className="text-gray-600 mb-6">
        Be among the first to experience MetrixAI and shape our product roadmap.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <Input
          label="Full Name"
          placeholder="John Smith"
          error={errors.name?.message}
          {...register("name")}
        />

        <Input
          label="Work Email"
          type="email"
          placeholder="john@company.com"
          error={errors.email?.message}
          {...register("email")}
        />

        <Input
          label="Company"
          placeholder="Acme Inc."
          error={errors.company?.message}
          {...register("company")}
        />

        <Input
          label="Job Title"
          placeholder="HR Director"
          error={errors.role?.message}
          {...register("role")}
        />

        <Button
          type="submit"
          className="w-full"
          size="lg"
          isLoading={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Submitting...
            </>
          ) : (
            "Join the Waitlist"
          )}
        </Button>
      </form>

      <p className="text-xs text-gray-500 mt-4 text-center">
        By submitting, you agree to our{" "}
        <a href="/privacy" className="underline hover:text-gray-700">
          Privacy Policy
        </a>
        .
      </p>
    </Card>
  );
}
