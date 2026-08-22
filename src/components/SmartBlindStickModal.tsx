import React from 'react';
import { 
  X, 
  ExternalLink, 
  Cpu, 
  ShieldCheck, 
  Radio, 
  Sun, 
  Volume2, 
  Battery, 
  Layers, 
  CheckCircle2, 
  Award,
  Sparkles,
  Bluetooth,
  Gauge
} from 'lucide-react';
import { Project } from '../types';
import { seaMistStyles as s } from '../utils/themeStyles';

interface SmartBlindStickModalProps {
  isOpen: boolean;
  onClose: () => void;
  project?: Project;
}

export const SmartBlindStickModal: React.FC<SmartBlindStickModalProps> = ({
  isOpen,
  onClose,
  project
}) => {
  if (!isOpen) return null;

  return (
    <div 
      id="smart-blind-stick-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#04100B]/80 backdrop-blur-sm animate-in fade-in duration-200 overflow-y-auto"
      onClick={onClose}
    >
      <div 
        id="smart-blind-stick-modal-card"
        className="relative w-full max-w-4xl my-6 rounded-3xl border border-[#2F8A5B]/40 bg-[#0C1F17] text-[#F3EDE1] shadow-2xl overflow-hidden max-h-[92vh] flex flex-col font-sans"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="px-6 py-4 border-b border-[#F3EDE1]/15 bg-[#0F2820] flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-[#2F8A5B]/20 border border-[#2F8A5B]/40 text-[#2F8A5B]">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider bg-[#E8622C]/20 border border-[#E8622C]/40 text-[#E8622C] font-bold">
                  BCA188 • Capstone Project
                </span>
                <span className="text-xs font-mono text-[#86A396]">
                  Embedded Systems
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#F3EDE1] tracking-tight">
                Smart Blind Stick with Arduino Uno
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="https://drive.google.com/file/d/1q0O2CSbukqFi9krv4dNYKIT05aR94OEh/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 px-3 rounded-xl border border-[#2F8A5B]/40 bg-[#0C1F17] hover:bg-[#0F2820] text-[#2F8A5B] hover:text-[#F3EDE1] text-xs font-bold flex items-center gap-1.5 transition-colors shadow-2xs"
              title="Open Google Drive link"
            >
              <ExternalLink className="w-3.5 h-3.5 text-[#2F8A5B]" />
              <span>Google Drive File</span>
            </a>
            <button
              onClick={onClose}
              className="p-2 rounded-xl border border-[#F3EDE1]/20 bg-[#0C1F17] hover:bg-[#0F2820] text-[#86A396] hover:text-[#F3EDE1] transition-colors"
              title="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Poster Content Area */}
        <div className="p-6 sm:p-8 space-y-6 overflow-y-auto">
          {/* Hero Meta Banner */}
          <div className="p-5 rounded-2xl bg-[#0F2820] border border-[#F3EDE1]/15 space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#F3EDE1]/10 pb-3 text-xs font-mono text-[#86A396]">
              <div>
                <span className="text-[#F3EDE1] font-semibold">Team: </span>
                <span>Jessa Andrada · Hannah Mae Lubguban · </span>
                <strong className="text-[#E8622C] font-bold">Reashane Paglinawan</strong>
              </div>
              <div className="px-2.5 py-1 rounded-lg bg-[#0C1F17] border border-[#2F8A5B]/30 text-[#2F8A5B] font-bold">
                PLATFORM: ARDUINO UNO + MIT APP INVENTOR
              </div>
            </div>

            <p className="text-xs sm:text-sm leading-relaxed text-[#F3EDE1]/90">
              A low-cost, sensor-equipped white cane that senses obstacles, ambient light, and sound — turning them into audible feedback so visually impaired users can navigate with more confidence.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              <div className="p-3 rounded-xl bg-[#0C1F17] border border-[#F3EDE1]/10 text-center">
                <div className="text-xl sm:text-2xl font-bold text-[#C9863F]">3</div>
                <div className="text-[10px] font-mono text-[#86A396] uppercase mt-0.5">Onboard Sensors</div>
              </div>
              <div className="p-3 rounded-xl bg-[#0C1F17] border border-[#F3EDE1]/10 text-center">
                <div className="text-xl sm:text-2xl font-bold text-[#2F8A5B]">40cm</div>
                <div className="text-[10px] font-mono text-[#86A396] uppercase mt-0.5">Obstacle Range</div>
              </div>
              <div className="p-3 rounded-xl bg-[#0C1F17] border border-[#F3EDE1]/10 text-center">
                <div className="text-xl sm:text-2xl font-bold text-[#E8622C]">9V</div>
                <div className="text-[10px] font-mono text-[#86A396] uppercase mt-0.5">Battery Regulated</div>
              </div>
            </div>
          </div>

          {/* 3 Interactive Sensor Function Cards */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[#86A396]">
              Sensor Modules &amp; Subsystems
            </h4>
            <div className="grid sm:grid-cols-3 gap-3.5">
              <div className="p-4 rounded-2xl bg-[#0F2820] border-l-4 border-l-[#2F8A5B] border border-[#F3EDE1]/10 space-y-2">
                <div className="text-[10px] font-mono text-[#86A396] uppercase">01 / Obstacle Sensing</div>
                <h5 className="font-bold text-[#F3EDE1] flex items-center gap-1.5">
                  <Radio className="w-4 h-4 text-[#2F8A5B]" />
                  <span>Ultrasonic HC-SR04</span>
                </h5>
                <p className="text-xs text-[#86A396] leading-relaxed">
                  Measures distance to obstacles up to 40cm ahead and triggers a buzzer + LED when something is in range.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#0F2820] border-l-4 border-l-[#C9863F] border border-[#F3EDE1]/10 space-y-2">
                <div className="text-[10px] font-mono text-[#86A396] uppercase">02 / Ambient Light</div>
                <h5 className="font-bold text-[#F3EDE1] flex items-center gap-1.5">
                  <Sun className="w-4 h-4 text-[#C9863F]" />
                  <span>LDR Light Sensor</span>
                </h5>
                <p className="text-xs text-[#86A396] leading-relaxed">
                  Reads light intensity and sounds a "darkness alert" tone so the user knows when ambient lighting conditions change.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#0F2820] border-l-4 border-l-[#E8622C] border border-[#F3EDE1]/10 space-y-2">
                <div className="text-[10px] font-mono text-[#86A396] uppercase">03 / Find-My-Stick</div>
                <h5 className="font-bold text-[#F3EDE1] flex items-center gap-1.5">
                  <Volume2 className="w-4 h-4 text-[#E8622C]" />
                  <span>Sound Sensor</span>
                </h5>
                <p className="text-xs text-[#86A396] leading-relaxed">
                  Listens for a clap or whistle and answers with a buzzer tone, allowing users to easily locate a set-down cane.
                </p>
              </div>
            </div>
          </div>

          {/* Two-column: Bill of Materials & Detection Test Strip */}
          <div className="grid md:grid-cols-2 gap-4">
            {/* Bill of Materials */}
            <div className="p-5 rounded-2xl bg-[#0F2820] border border-[#F3EDE1]/15 space-y-3">
              <div className="flex items-center justify-between text-xs font-mono text-[#86A396] uppercase border-b border-[#F3EDE1]/10 pb-2">
                <span>Bill of Materials</span>
                <span className="px-2 py-0.5 rounded bg-[#0C1F17] text-[#2F8A5B] font-bold">14 Items</span>
              </div>
              <ul className="grid grid-cols-2 gap-x-3 gap-y-1.5 text-xs text-[#F3EDE1]/90">
                <li className="flex items-center gap-1.5"><span className="text-[#C9863F] font-bold">·</span> 2× Arduino Uno</li>
                <li className="flex items-center gap-1.5"><span className="text-[#C9863F] font-bold">·</span> PVC pipe, 40.5"</li>
                <li className="flex items-center gap-1.5"><span className="text-[#C9863F] font-bold">·</span> Ultrasonic sensor</li>
                <li className="flex items-center gap-1.5"><span className="text-[#C9863F] font-bold">·</span> LDR (light sensor)</li>
                <li className="flex items-center gap-1.5"><span className="text-[#C9863F] font-bold">·</span> Sound sensor</li>
                <li className="flex items-center gap-1.5"><span className="text-[#C9863F] font-bold">·</span> 3× LEDs</li>
                <li className="flex items-center gap-1.5"><span className="text-[#C9863F] font-bold">·</span> 4× resistors (330Ω/10kΩ)</li>
                <li className="flex items-center gap-1.5"><span className="text-[#C9863F] font-bold">·</span> Breadboards</li>
                <li className="flex items-center gap-1.5"><span className="text-[#C9863F] font-bold">·</span> 4× 9V batteries</li>
                <li className="flex items-center gap-1.5"><span className="text-[#C9863F] font-bold">·</span> 2× buzzers &amp; switches</li>
                <li className="flex items-center gap-1.5"><span className="text-[#C9863F] font-bold">·</span> HC-05 Bluetooth</li>
                <li className="flex items-center gap-1.5"><span className="text-[#C9863F] font-bold">·</span> Jumper wires</li>
              </ul>
            </div>

            {/* Detection Test Range Strip */}
            <div className="p-5 rounded-2xl bg-[#0F2820] border border-[#F3EDE1]/15 space-y-3 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-[#86A396] uppercase border-b border-[#F3EDE1]/10 pb-2">
                  <span>Obstacle Range Test</span>
                  <span className="text-[#E8622C] font-bold">Buzzer Trigger</span>
                </div>
                <div className="flex items-end gap-2 h-24 mt-4 px-2">
                  <div className="flex-1 bg-gradient-to-t from-[#2F8A5B] to-[#2F8A5B]/40 rounded-t h-[25%] relative flex items-center justify-center text-[10px] font-bold text-white">✓</div>
                  <div className="flex-1 bg-gradient-to-t from-[#2F8A5B] to-[#2F8A5B]/40 rounded-t h-[45%] relative flex items-center justify-center text-[10px] font-bold text-white">✓</div>
                  <div className="flex-1 bg-gradient-to-t from-[#2F8A5B] to-[#2F8A5B]/40 rounded-t h-[65%] relative flex items-center justify-center text-[10px] font-bold text-white">✓</div>
                  <div className="flex-1 bg-gradient-to-t from-[#2F8A5B] to-[#2F8A5B]/40 rounded-t h-[85%] relative flex items-center justify-center text-[10px] font-bold text-white">✓</div>
                  <div className="flex-1 bg-gradient-to-t from-[#2F8A5B] to-[#2F8A5B]/40 rounded-t h-[100%] relative flex items-center justify-center text-[10px] font-bold text-white">✓</div>
                  <div className="flex-1 bg-gradient-to-t from-[#E8622C]/70 to-[#E8622C]/20 rounded-t h-[100%] relative flex items-center justify-center text-[10px] font-bold text-white">✕</div>
                </div>
                <div className="flex justify-between text-[10px] font-mono text-[#86A396] px-1 pt-1.5">
                  <span>0cm</span><span>10cm</span><span>20cm</span><span>35cm</span><span>40cm</span><span>50cm</span>
                </div>
              </div>
              <p className="text-[11px] text-[#86A396] font-mono leading-relaxed pt-2">
                Buzzer reliably triggers for obstacles within ≤40cm; beyond that threshold the cane reports "no barrier ahead."
              </p>
            </div>
          </div>

          {/* Android Companion App (MIT App Inventor) Banner */}
          <div className="p-4 rounded-2xl bg-[#0F2820] border border-[#2F8A5B]/30 flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-[#2F8A5B]/20 text-[#2F8A5B]">
                <Bluetooth className="w-4 h-4" />
              </div>
              <div>
                <span className="font-bold text-[#F3EDE1]">MIT App Inventor Companion App:</span>
                <p className="text-[#86A396] mt-0.5">Bluetooth (HC-05) voice guidance speaking distance readings aloud via Android Text-to-Speech.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 border-t border-[#F3EDE1]/15 bg-[#0F2820] flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="text-[#86A396] font-mono text-[11px]">
            SMART BLIND STICK · ARDUINO UNO · ULTRASONIC · LDR · SOUND · HC-05 · MIT APP INVENTOR
          </div>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl border border-[#F3EDE1]/20 bg-[#0C1F17] hover:bg-[#0F2820] text-[#F3EDE1] font-semibold transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
