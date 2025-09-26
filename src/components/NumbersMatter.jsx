import React, { memo } from "react";
import CountUp from "react-countup";

const stats = [
  { label: "Experience", value: 6, suffix: "+" },
  { label: "Team", value: 30, suffix: "+" },
  { label: "Clients", value: 100, suffix: "+" },
  { label: "Monthly Conversion", value: 1000000, suffix: "+" },
];

const formatValue = (num, label) => {
  if (label === "Monthly Conversion") {
    return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
  }
  return num;
};

function NumbersMatter() {
  return (
    <section className="bg-white text-black py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl sm:text-4xl font-bold mb-6 tracking-tight">
          <span className="text-red-600">Numbers</span> Matter
        </h2>
        <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-14 font-light text-gray-700">
          Our method of measuring success is to calculate the numbers each time.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map(({ label, value, suffix }) => (
            <div
              key={label}
              className="bg-gray-100 p-8 rounded-2xl shadow-md flex flex-col items-center transition-transform transform hover:scale-105"
            >
              <p className="text-5xl sm:text-6xl md:text-7xl font-bold mb-3 text-red-600 min-w-[120px] text-center font-mono">
                <CountUp
                  start={0}
                  end={value}
                  duration={2}
                  separator=","
                  enableScrollSpy
                  scrollSpyOnce
                  formattingFn={(num) => formatValue(num, label)}
                >
                  {({ countUpRef }) => (
                    <>
                      <span ref={countUpRef} />
                      {suffix}
                    </>
                  )}
                </CountUp>
              </p>
              <p className="uppercase tracking-widest text-sm font-semibold text-gray-600">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ✅ Wrap in memo to avoid unnecessary re-renders
export default memo(NumbersMatter);
