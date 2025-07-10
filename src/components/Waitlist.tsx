"use client";
import { useState, useTransition } from "react";
import { Loader2, Phone, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { waitlistSchema, type WaitlistFormData } from "@/types/validation";
import { cn } from "@/lib/utils";
import clsx from "clsx";
import { seymour } from "@/lib/fonts";
import { toast } from "sonner";
import { joinWaitlist } from "@/actions/waitlist";
function Input({
  id,
  type = "text",
  placeholder,
  value,
  onChange,
  disabled,
  className = "",
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      value={value}
      autoComplete="off"
      autoCorrect="off"
      spellCheck="false"
      onChange={onChange}
      disabled={disabled}
      className={cn(
        "h-11 px-3 py-2 border border-input rounded-md bg-background text-sm shadow-sm",
        "focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed",
        className
      )}
    />
  );
}

export default function WaitlistForm() {
  const [formData, setFormData] = useState<WaitlistFormData>({
    name: "",
    phone: "",
  });

  const [errors, setErrors] = useState<any>({});

  const [isPending, startTransition] = useTransition();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    if (errors[id as keyof WaitlistFormData]) {
      setErrors((prev: any) => ({ ...prev, [id]: undefined }));
    }
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    const validation = waitlistSchema.safeParse(formData);
    if (!validation.success) {
      const fieldErrors: typeof errors = {};
      for (const issue of validation.error.issues) {
        const field = issue.path[0] as keyof WaitlistFormData;
        fieldErrors[field] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }

    startTransition(async () => {
      try {
        const result = await joinWaitlist(formData);

        if (result.success) {
          toast.success("Welcome to the waitlist!", {
            description: result.message,
            duration: 5000,
          });
          setFormData({ name: "", phone: "" });
          setErrors({});
        } else {
          if (result.errors) {
            setErrors(result.errors);
            if (result.errors.phone) {
              toast.error("Phone number already registered", {
                description: result.errors.phone,
              });
            }
          } else {
            toast.error("Something went wrong", {
              description: result.message,
            });
          }
        }
      } catch (error) {
        console.error("Form submission error:", error);
        toast.error("Network Error", {
          description: "Please check your connection and try again.",
        });
      }
    });
  };

  return (
    <div className="w-full max-w-screen mx-auto h-[calc(100vh-200px)] flex flex-col items-center justify-center relative overflow-x-hidden">
      <h1
        className={clsx(
          "absolute top-[10%] md:top-[15%] text-center font-extrabold text-2xl sm:text-4xl",
          seymour.className
        )}
      >
        Join the waitlist
      </h1>

      <form
        onSubmit={onSubmit}
        className={cn(
          "flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6",
          "w-full px-4"
        )}
      >
        <div
          id="waitlist"
          className="flex flex-col items-start relative w-full sm:w-[85%] md:w-auto"
        >
          <Label
            htmlFor="name"
            className="mb-1 text-sm font-medium flex items-center gap-1"
          >
            <User className="w-4 h-4" />
            Full Name
          </Label>
          <Input
            id="name"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleChange}
            disabled={isPending}
            className={cn(
              "w-[96%] sm:w-[90%] md:w-[240px] lg:w-[280px] xl:w-[320px]",
              errors.name && "border-destructive focus:ring-destructive"
            )}
          />
          <p className="h-4 mt-1 text-xs sm:text-sm text-destructive min-h-[1rem]">
            {errors.name}
          </p>
        </div>
        <div className="flex flex-col items-start relative w-full sm:w-[85%] md:w-auto">
          <Label
            htmlFor="phone"
            className="mb-1 text-sm font-medium flex items-center gap-1"
          >
            <Phone className="w-4 h-4" />
            Phone Number
          </Label>
          <Input
            id="phone"
            type="tel"
            placeholder="017xxxxxxxx"
            value={formData.phone}
            onChange={handleChange}
            disabled={isPending}
            className={cn(
              "w-[96%] sm:w-[90%] md:w-[240px] lg:w-[280px] xl:w-[320px]",
              errors.phone && "border-destructive focus:ring-destructive"
            )}
          />
          <p className="h-4 mt-1 text-xs sm:text-sm text-destructive min-h-[1rem]">
            {errors.phone}
          </p>
        </div>

        <Button
          type="submit"
          className={cn(
            "h-12 text-base font-medium",
            "w-[100%] sm:w-[90%] md:w-[180px] rounded-sm"
          )}
          disabled={isPending}
        >
          {isPending ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Joining...
            </>
          ) : (
            "Join the Waitlist"
          )}
        </Button>
      </form>
    </div>
  );
}
