import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Section from './components/Section';
import Card from './components/Card';
import ChartCard from './components/ChartCard';
import Timeline from './components/Timeline';
import ImageCard from './components/ImageCard';
import SectionLine from "./components/SectionLine";
import { ShieldCheck, Zap, Timer, Layers } from "lucide-react";

function App() {
  // Chart data
  const compressiveStrengthData = {
    threeDays: {
      values: [145.01, 152.79, 141.06, 128.31, 117.70],
      error: [10.6, 13.4, 13.8, 10.3, 11.6],
    },
    fourteenDays: {
      values: [285.19, 291.41, 231.08, 227.46, 196.75],
      error: [7.3, 13.3, 19.6, 19.5, 17.6],
    },
    twentyEightDays: {
      values: [290.80, 299.42, 271.72, 136.84, 224.09],
      error: [16.3, 19.1, 36.2, 21.2, 19.1],
    },
  };

  const volumetricDensityData = {
    threeDays: {
      values: [2213.35, 2178.64, 2147.69, 2127.97, 2080.00],
      error: [4.27, 3.37, 47.05, 64.85, 75.61],
    },
    fourteenDays: {
      values: [2217.11, 2187.07, 2173.61, 2137.32, 2135.08],
      error: [24.18, 40.26, 28.99, 24.20, 43.94],
    },
    twentyEightDays: {
      values: [2238.82, 2200.42, 2189.51, 2166.65, 2138.18],
      error: [12.82, 0.88, 33.32, 9.08, 3.55],
    },
  };

  const waterAbsorptionData = {
    threeDays: {
      values: [5.49, 6.31, 6.51, 6.65, 6.68],
      error: [0.02, 0.03, 0.44, 0.43, 0.43],
    },
    fourteenDays: {
      values: [5.09, 5.39, 5.40, 5.68, 5.72],
      error: [0.06, 0.14, 0.04, 0.09, 0.31],
    },
    twentyEightDays: {
      values: [5.07, 5.18, 5.23, 5.55, 5.56],
      error: [0.14, 0.22, 0.12, 0.13, 0.12],
    },
  };

  const benefits = [
  {
    icon: ShieldCheck,
    title: "กำลังอัดสูงกว่า",
    description:
      "คอนกรีตไบโอชาร์มีเป้าหมายที่ 240 ksc และมีแนวโน้มสูงกว่าคอนกรีตทั่วไปจากผลการทดลอง",
  },
  {
    icon: Zap,
    title: "ประสิทธิภาพดีขึ้น",
    description:
      "ความแข็งแรงเพิ่มขึ้นตามสัดส่วนของไบโอชาร์ที่ผสมอย่างเหมาะสม",
  },
  {
    icon: Timer,
    title: "เซตตัวเร็วกว่า",
    description:
      "ระยะเวลาการแข็งตัวสั้นลงจากการสังเกตในการทดลองจริง",
  },
  {
    icon: Layers,
    title: "ลดการใช้ทราย",
    description:
      "ช่วยลดปริมาณการใช้ทรายในสูตรผสม เมื่อเทียบกับคอนกรีตปกติ",
  },
];


  const operationSteps = [
    'บดไบโอชาร์ด้วยบอลมิลล์ และร่อนผ่านตะแกรงขนาด 200 เมช',
    'ผสมวัสดุตามตารางเปอร์เซ็นต์ที่คำนวณไว้ล่วงหน้า (เปอร์เซ็นต์ไบโอชาร์)',
    'เทลงในแม่พิมพ์และทดสอบที่ 3, 14 และ 28 วัน',
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Landing Page */}
      <Hero />
      
      {/* Problems Section */}
      <Section id="problems" className="bg-gradient-to-b from-gray-50 to-white">
        <SectionLine text="ที่มาของโครงงาน" />

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <ImageCard
            src="/images/problem-1.png"
            alt="การเผาเศษวัสดุเกษตรที่ก่อให้เกิดมลพิษ PM2.5"
            caption="การเผาเศษวัสดุเกษตรปล่อย PM2.5 และกระทบต่อสุขภาพของชุมชน"
          />
          <ImageCard
            src="/images/problem-2.png"
            alt="ปัญหาขยะเปลือกผลไม้ที่สะสม"
            caption="เศษเปลือกผลไม้สะสมต่อเนื่อง ต้องการทางเลือกการจัดการที่ยั่งยืน"
          />
        </div>

        {/* Highlight box */}
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl bg-white border border-gray-200 shadow-sm px-6 py-8 md:px-10">
            <h3 className="font-athiti text-2xl md:text-3xl font-semibold text-gray-900 text-center mb-6">
              ปัญหาที่เราอยากแก้ให้ “จับต้องได้”
            </h3>

            <div className="space-y-5 text-center">
              <p className="font-athiti text-base md:text-lg text-gray-700 leading-relaxed">
                ปัญหาแรกคือ <span className="font-semibold text-gray-900">PM2.5 จากการเผาเศษวัสดุเกษตร</span>
                ซึ่งทำให้คุณภาพอากาศแย่ลงและเพิ่มความเสี่ยงต่อสุขภาพของคนในพื้นที่
              </p>

              <p className="font-athiti text-base md:text-lg text-gray-700 leading-relaxed">
                ปัญหาที่สองคือ <span className="font-semibold text-gray-900">เศษเปลือกผลไม้ที่เกิดขึ้นจำนวนมาก</span>
                หากจัดการไม่ดีจะกลายเป็นภาระต่อสิ่งแวดล้อมและระบบกำจัดขยะ
              </p>

              <p className="font-athiti text-base md:text-lg text-gray-700 leading-relaxed">
                โครงงานนี้จึงมุ่งหาแนวทางที่ <span className="font-semibold text-gray-900">ยั่งยืนและใช้ได้จริง</span>
                โดยเปลี่ยนของเสียให้เป็น “วัสดุที่มีมูลค่า” และช่วยลดผลกระทบต่อสิ่งแวดล้อมไปพร้อมกัน
              </p>
            </div>

            {/* Bottom emphasis */}
            <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-3">
              <span className="font-athiti text-sm md:text-base px-4 py-2 rounded-full bg-gray-900 text-white">
                ลดมลพิษ
              </span>
              <span className="font-athiti text-sm md:text-base px-4 py-2 rounded-full bg-gray-100 text-gray-900 border border-gray-200">
                ลดของเสีย
              </span>
              <span className="font-athiti text-sm md:text-base px-4 py-2 rounded-full bg-gray-100 text-gray-900 border border-gray-200">
                เพิ่มมูลค่าเป็นวัสดุก่อสร้าง
              </span>
            </div>
          </div>
        </div>
      </Section>


      {/* Introduction Section */}
      <Section id="introduction" title="">
        <SectionLine text="บทนำ" />
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <Card>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              คอนกรีตไบโอชาร์ (240 ksc)
            </h3>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                ค่า "240 ksc" หมายถึง ค่าความต้านทานแรงอัด (compressive strength) 
                ที่วัดเป็นหน่วยกิโลกรัมแรงต่อตารางเซนติเมตร (ksc) 
                ซึ่งแสดงถึงความแข็งแรงเป้าหมายของคอนกรีตสูตรนี้
              </p>
              <p>
                ไบโอชาร์ คือวัสดุที่อุดมด้วยคาร์บอน ผลิตผ่านกระบวนการไพโรไลซิส
                คือการให้ความร้อนแก่ชีวมวลในสภาวะที่ไม่มีออกซิเจน 
                กระบวนการนี้เปลี่ยนของเสียจากเกษตรและอินทรีย์ให้กลายเป็นวัสดุที่มีเสถียรภาพ
                มีรูพรุน และสามารถเพิ่มคุณสมบัติของคอนกรีต
              </p>
              <p>
                การนำไบโอชาร์ที่ได้จากเปลือกผลไม้มาผสมในส่วนผสมคอนกรีต
                งานวิจัยนี้สำรวจแนวทางที่ยั่งยืนในการจัดการของเสีย
                พร้อมกับเพิ่มประสิทธิภาพของวัสดุก่อสร้าง
              </p>
            </div>
          </Card>
          <div className="space-y-6">
            <ImageCard
                src="/images/biochars-structure.png"
              alt="โครงสร้างวัสดุไบโอชาร์"
              caption="ไบโอชาร์: วัสดุอุดมด้วยคาร์บอนจากกระบวนการไพโรไลซิส"
            />
            <ImageCard
                src="/images/concrete-sample.png"
              alt="ตัวอย่างคอนกรีตสำหรับการทดสอบ"
              caption="ตัวอย่างคอนกรีตที่เตรียมไว้สำหรับทดสอบความแข็งแรง"
            />
          </div>
        </div>
      </Section>

      {/* Benefits Section */}
      <Section id="benefits" className="bg-gradient-to-b from-gray-50 to-white">
        <SectionLine text="ประโยชน์" />
        <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
                <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-gray-900"
                >
                <div className="flex items-start gap-5">
                    
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-xl bg-gray-900 text-white flex items-center justify-center 
                                    group-hover:scale-110 transition-transform duration-300 shadow-md">
                    <Icon size={22} />
                    </div>

                    {/* Content */}
                    <div>
                    <h3 className="font-semibold text-lg mb-2 text-gray-900">
                        {benefit.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                        {benefit.description}
                    </p>
                    </div>
                </div>
                </Card>
            );
            })}
        </div>
    </Section>


      {/* Operation Section */}
      <Section id="operation">
        <SectionLine text="ขั้นตอนการดำเนินงาน" />
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <Timeline steps={operationSteps} />
          </Card>
          <div className="space-y-6">
            <ImageCard
                src="/images/ballmill.png"
              alt="กระบวนการบดด้วยบอลมิลล์"
              caption="ขั้นตอนที่ 1: บดไบโอชาร์ด้วยบอลมิลล์"
            />
            <ImageCard
                src="/images/mixture-filling.png"
              alt="กระบวนการผสมวัสดุ"
              caption="ขั้นตอนที่ 2: ผสมวัสดุตามเปอร์เซ็นต์"
            />
            <ImageCard
                src="/images/template-filling.png"
              alt="แม่พิมพ์คอนกรีตและการทดสอบ"
              caption="ขั้นตอนที่ 3: ทดสอบที่ 3, 14 และ 28 วัน"
            />
          </div>
        </div>
      </Section>

      {/* Results Section */}
      <Section id="results" className="bg-gray-50">
        <SectionLine text="ผลการทดลอง" />
        <div className="space-y-8">
          <ChartCard
            title="ความต้านทานแรงอัด เทียบกับ เปอร์เซ็นต์ไบโอชาร์"
            data={compressiveStrengthData}
            unit="ksc"
          />
          <ChartCard
            title="ความหนาแน่นเชิงปริมาตร เทียบกับ เปอร์เซ็นต์ไบโอชาร์"
            data={volumetricDensityData}
            unit="kg/m³"
          />
          <ChartCard
            title="การดูดซึมน้ำ เทียบกับ เปอร์เซ็นต์ไบโอชาร์"
            data={waterAbsorptionData}
            unit="%"
          />
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-white py-8 text-center text-gray-600 text-sm">
        <p>งานนำเสนอวิจัยคอนกรีตไบโอชาร์ © 2026</p>
      </footer>
    </div>
  );
}

export default App;