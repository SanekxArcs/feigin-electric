
import { AlertTriangle, CircleArrowLeft, MonitorCog } from "lucide-react";
import { TransitionLink } from "./components/utils/TransitionLink";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="relative bg-fred-50 grid place-content-center h-[80svh] px-4">
      <div className="text-center max-w-md">
        <AlertTriangle className="w-16 h-16 text-fred-600 mb-4 mx-auto" />
        <h2 className="text-fred-700 text-4xl font-bold mb-2">
          Nie znaleziono
        </h2>
        <p className="text-gray-700 text-lg mb-6">
          Strona jeszcze w budowie lub nie istnieje.
        </p>
        <TransitionLink href="/">
          <Button
            variant="outline"
            className=" text-fgreen-950 font-semibold transition-all duration-300 hover:text-fgreen-50 rounded-full hover:bg-fgreen-700 ring-1 ring-fgreen-700 ring-offset-2"
          >
            <CircleArrowLeft className="mr-2 md:mr-0" />
            <span className="md:hidden xl:block">Wróć do strony głównej</span>
          </Button>
        </TransitionLink>
      </div>
      <div className="absolute top-0 inset-x-0 h-24 pointer-events-none bg-gradient-to-b from-white z-20"></div>
      <div className="absolute bottom-0 inset-x-0 h-24 pointer-events-none bg-gradient-to-t from-white z-20"></div>
    </div>
  );
}

/*
  This component is a responsive "Not Found" page for Next.js that uses Tailwind CSS for styling.
  - Utilizes a color scheme with "fred" and "fgreen" for a visually engaging experience.
  - Includes an icon from Lucide React to emphasize the missing page.
  - Responsive design to ensure usability across different devices.
  - The Link component is styled to guide users back to the homepage effectively.
*/
