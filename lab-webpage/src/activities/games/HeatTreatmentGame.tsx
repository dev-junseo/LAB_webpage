import React, { useState, useEffect, useRef } from "react";
import { Card } from "../../components/Card";

function HeatTreatmentGame() {
  const [temperature, setTemperature] = useState(800);
  const [time, setTime] = useState(60);
  const [isProcessing, setIsProcessing] = useState(false);
  const [currentGrainSize, setCurrentGrainSize] = useState(5);
  const [result, setResult] = useState<{ score: number; message: string; finalSize: number } | null>(null);
  const [elapsedTime, setElapsedTime] = useState(0);

  const TARGET_SIZE = 150; // 목표 결정립 크기: 150μm
  const animationRef = useRef<number>();

  const calculateSize = (temp: number, t: number) => {
    const k = 0.00002; 
    const growth = k * Math.pow(temp, 2) * (t / 10);
    return Math.min(5 + growth, 200);
  };

  const startTreatment = () => {
    setIsProcessing(true);
    setResult(null);
    setElapsedTime(0);
    setCurrentGrainSize(5);

    let start: number | null = null;
    const duration = 3000;

    const animate = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const pct = progress / duration;

      if (pct < 1) {
        const currentSimTime = time * pct;
        setElapsedTime(Math.round(currentSimTime));
        setCurrentGrainSize(calculateSize(temperature, currentSimTime));
        animationRef.current = requestAnimationFrame(animate);
      } else {
        finishTreatment();
      }
    };

    animationRef.current = requestAnimationFrame(animate);
  };

  const finishTreatment = () => {
    setIsProcessing(false);
    const finalSize = calculateSize(temperature, time);
    setCurrentGrainSize(finalSize);
    
    const diff = Math.abs(finalSize - TARGET_SIZE);
    let score = Math.max(0, 100 - Math.round(diff * 2));
    let message = "";

    if (score >= 95) message = "완벽합니다! 이상적인 결정립 구조를 얻었습니다. ✨";
    else if (score >= 80) message = "훌륭합니다. 상용 전기강판 수준의 품질입니다. 👍";
    else if (finalSize < TARGET_SIZE) message = "온도나 시간이 부족하여 결정립이 충분히 성장하지 못했습니다. ❄️";
    else message = "과열(Overheating)로 인해 결정립이 너무 커져 물성이 저하되었습니다. 🔥";

    setResult({ score, message, finalSize });
  };

  useEffect(() => {
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <div className="mx-[10%] my-12 font-sans select-none">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-title mb-2">열처리 마스터 (Heat Treatment)</h1>
        <p className="text-gray-500">최적의 온도와 시간을 찾아 목표 결정립 크기를 달성하세요!</p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        <Card className="p-8 space-y-10 shadow-xl border-t-8 border-orange-500">
          <div>
            <div className="flex justify-between items-end mb-4">
              <label className="text-lg font-bold text-slate-700">가열 온도 (Temperature)</label>
              <span className="text-3xl font-black text-orange-600">{temperature} <small className="text-lg font-normal">℃</small></span>
            </div>
            <input 
              type="range" min="600" max="1200" step="10"
              value={temperature}
              onChange={(e) => setTemperature(parseInt(e.target.value))}
              disabled={isProcessing}
              className="w-full h-3 bg-orange-100 rounded-lg appearance-none cursor-pointer accent-orange-600"
            />
          </div>

          <div>
            <div className="flex justify-between items-end mb-4">
              <label className="text-lg font-bold text-slate-700">유지 시간 (Soaking Time)</label>
              <span className="text-3xl font-black text-blue-600">{time} <small className="text-lg font-normal">min</small></span>
            </div>
            <input 
              type="range" min="10" max="120" step="5"
              value={time}
              onChange={(e) => setTime(parseInt(e.target.value))}
              disabled={isProcessing}
              className="w-full h-3 bg-blue-100 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
          </div>

          <div className="pt-4">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 text-center">
              <span className="block text-gray-500 text-sm mb-1 uppercase tracking-widest font-bold">Target Grain Size</span>
              <span className="text-5xl font-black text-slate-800">{TARGET_SIZE} <small className="text-xl">μm</small></span>
            </div>
          </div>

          <button 
            onClick={startTreatment}
            disabled={isProcessing}
            className={`w-full py-5 rounded-2xl font-bold text-xl transition-all shadow-lg ${
              isProcessing ? "bg-slate-300 cursor-not-allowed" : "bg-title text-white hover:bg-opacity-90 active:scale-95"
            }`}
          >
            {isProcessing ? "Treatment in Progress..." : "Start Heat Treatment"}
          </button>
        </Card>

        <div className="space-y-6">
          <Card className="relative aspect-square bg-[#1a1a1a] overflow-hidden rounded-3xl shadow-2xl border-8 border-slate-800">
            <div 
              className="absolute inset-0 transition-opacity duration-1000"
              style={{ backgroundColor: `rgba(255, 69, 0, ${Math.min((temperature - 600) / 1000, 0.4)})` }}
            ></div>

            <div className="absolute inset-0 flex items-center justify-center p-10">
              <div className="grid grid-cols-6 gap-2 w-full h-full">
                {Array.from({ length: 36 }).map((_, i) => (
                  <div 
                    key={i}
                    className="bg-slate-400 rounded-full transition-all duration-300 ease-out"
                    style={{ 
                      width: `${currentGrainSize * 0.65}%`, 
                      height: `${currentGrainSize * 0.65}%`,
                      margin: "auto",
                      backgroundColor: `hsl(210, 10%, ${20 + (temperature / 20)}%)`,
                      boxShadow: `0 0 ${currentGrainSize/5}px rgba(255,255,255,0.2)`
                    }}
                  ></div>
                ))}
              </div>
            </div>

            <div className="absolute top-6 left-6 flex gap-4">
              <div className="bg-black/60 backdrop-blur-md px-4 py-2 rounded-xl border border-white/20">
                <span className="text-[10px] text-white/50 block font-bold uppercase">Timer</span>
                <span className="text-white font-mono text-xl">{elapsedTime} min</span>
              </div>
              <div className="bg-black/60 backdrop-blur-md px-4 py-2 rounded-xl border border-white/20">
                <span className="text-[10px] text-white/50 block font-bold uppercase">Current Size</span>
                <span className="text-white font-mono text-xl">{currentGrainSize.toFixed(1)} μm</span>
              </div>
            </div>
          </Card>

          {result && (
            <Card className="p-6 bg-white border-l-8 border-green-500 animate-[modalIn_0.4s_ease-out]">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-slate-800">실험 결과</h3>
                  <p className="text-gray-500 text-sm">최종 결정립 크기: <span className="font-bold text-slate-800">{result.finalSize.toFixed(1)}μm</span></p>
                </div>
                <div className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-black text-xl">
                  {result.score}점
                </div>
              </div>
              <p className="text-lg text-slate-700 font-medium leading-relaxed">{result.message}</p>
              <button 
                onClick={() => setResult(null)}
                className="mt-4 text-sm font-bold text-title hover:underline"
              >
                다시 시도하기
              </button>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}

export default HeatTreatmentGame;
