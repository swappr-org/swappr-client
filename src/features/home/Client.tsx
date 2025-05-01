import { Button } from "antd";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-tertiary text-4xl font-bold sm:text-5xl md:text-6xl">
            Swap Your Phone with Confidence
          </h1>
          <p className="mx-auto mt-3 max-w-md text-base text-gray-500 sm:text-lg md:mt-5 md:max-w-3xl md:text-xl">
            A secure and transparent platform for buying and swapping phones in
            Nigeria. Our AI-powered system ensures fair deals and prevents
            fraud.
          </p>
          <div className="mx-auto mt-5 max-w-md sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <Button size="large" className="w-full">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
