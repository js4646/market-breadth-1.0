import StockFearGreed from "./components/StockFearGreed";
import AdvanceDeclineChart from "./components/AdvanceDeclineChart";

export default function Home() {
  return (
    <main className="min-h-screen p-8 bg-gradient-to-br from-gray-300 via-gray-400 to-blue-200">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">
          Market Breadth Dashboard
        </h1>
        <p className="text-lg text-gray-600 mt-2 max-w-2xl mx-auto">
          Welcome! This site tracks key stock market breadth indicators to help
          traders and investors make smarter decisions.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Fear & Greed Index
          </h2>
          <StockFearGreed />
        </div>

        <div className="bg-white shadow-lg rounded-2xl p-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-4 text-center">
            Advance–Decline Line
          </h2>
          <div className="flex justify-center">
            <AdvanceDeclineChart />
          </div>
        </div>
      </div>

      <footer className="mt-12 text-center text-sm text-gray-500">
        <p>Affiliate linSks / Ads go here</p>
      </footer>
    </main>
  );
}
