import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      cacheTime: 1000 * 60 * 30, // 30 minutes
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-black dark:bg-black light:bg-zinc-50 text-white dark:text-white light:text-zinc-900 selection:bg-teal-500 selection:text-black antialiased overflow-x-hidden transition-colors duration-300">
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
        <style jsx global>{`
          /* Custom Scrollbar - Dark Mode */
          ::-webkit-scrollbar {
            width: 6px;
          }
          ::-webkit-scrollbar-track {
            background: #000;
          }
          .dark ::-webkit-scrollbar-track {
            background: #000;
          }
          .light ::-webkit-scrollbar-track {
            background: #f4f4f5;
          }
          ::-webkit-scrollbar-thumb {
            background: #333;
            border-radius: 10px;
          }
          .dark ::-webkit-scrollbar-thumb {
            background: #333;
          }
          .light ::-webkit-scrollbar-thumb {
            background: #a1a1aa;
          }
          ::-webkit-scrollbar-thumb:hover {
            background: #555;
          }
          .dark ::-webkit-scrollbar-thumb:hover {
            background: #555;
          }
          .light ::-webkit-scrollbar-thumb:hover {
            background: #71717a;
          }
          
          /* Smooth Scrolling */
          html {
            scroll-behavior: smooth;
          }
          
          /* Theme Transitions */
          html {
            transition: background-color 0.3s ease, color 0.3s ease;
          }
          
          /* Fix for overflow on body */
          body {
            margin: 0;
            padding: 0;
          }
          
          /* Dark Mode Defaults */
          .dark {
            background: #000;
            color: #fff;
          }
          
          /* Light Mode */
          .light {
            background: #fafafa;
            color: #18181b;
          }
          
          /* Hide default cursor on desktop for custom cursor */
          @media (min-width: 768px) {
            * {
              cursor: none !important;
            }
          }
        `}</style>
      </body>
    </html>
  );
}
