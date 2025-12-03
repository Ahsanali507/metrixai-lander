import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Card } from "@/components/ui/Card";

describe("Card", () => {
  it("renders children", () => {
    render(<Card>Card content</Card>);
    expect(screen.getByText("Card content")).toBeInTheDocument();
  });

  it("renders with default variant", () => {
    render(<Card data-testid="card">Default card</Card>);
    const card = screen.getByTestId("card");
    expect(card).toHaveClass("bg-white");
  });

  it("renders with elevated variant", () => {
    render(<Card variant="elevated" data-testid="card">Elevated card</Card>);
    const card = screen.getByTestId("card");
    expect(card).toHaveClass("shadow-lg");
  });

  it("renders with outlined variant", () => {
    render(<Card variant="outlined" data-testid="card">Outlined card</Card>);
    const card = screen.getByTestId("card");
    expect(card).toHaveClass("border-2");
  });

  it("renders with glass variant", () => {
    render(<Card variant="glass" data-testid="card">Glass card</Card>);
    const card = screen.getByTestId("card");
    expect(card).toHaveClass("backdrop-blur-xl");
  });

  it("applies hover effect when hover prop is true", () => {
    render(<Card hover data-testid="card">Hoverable card</Card>);
    const card = screen.getByTestId("card");
    expect(card).toHaveClass("hover:shadow-xl");
  });

  it("applies custom className", () => {
    render(<Card className="custom-class" data-testid="card">Custom card</Card>);
    const card = screen.getByTestId("card");
    expect(card).toHaveClass("custom-class");
  });
});
