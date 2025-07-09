'use client';
 
import { ProgressProvider } from '@bprogress/next/app';
import { useTheme } from 'next-themes';
 
const ProgressProviders = ({ children }: { children: React.ReactNode }) => {
    const { theme } = useTheme();
  return (
    <ProgressProvider 
      height="4px"
      color={theme === "light" ? "#72e3ad" : "#006239"}
      options={{ showSpinner: false }}
      shallowRouting
    >
      {children}
    </ProgressProvider>
  );
};
 
export default ProgressProviders;