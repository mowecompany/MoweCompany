import FlickeringGrid from "@/components/ui/flickering-grid";

export function FlickeringGridRounded() {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden ">
      <FlickeringGrid
        className="z-0 relative inset-0 [mask-image:radial-gradient(450px_circle_at_center,white,transparent)]"
        squareSize={42}
        gridGap={20}
        color="#D4D4D8"
        maxOpacity={0.3}
        flickerChance={0.1}
        height={900}
        width={2000}
      />
    </div>
  );
}