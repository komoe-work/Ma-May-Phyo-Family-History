/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  User, 
  Briefcase, 
  GraduationCap, 
  Heart, 
  MapPin, 
  Camera, 
  Music, 
  Book, 
  Stethoscope, 
  ShoppingBag,
  Award,
  Users,
  Star,
  Quote,
  Clock,
  Palette,
  ArrowRight,
  ExternalLink,
  ChevronRight,
  Sparkles,
  Mail,
  Phone,
  Globe
} from 'lucide-react';

// အဓိက App Component
const App = () => {
  const [activeTab, setActiveTab] = useState('entrepreneur');

  // လုပ်ငန်းခွင်ဖြတ်သန်းမှု အချက်အလက်များ
  const businessTimeline = [
    { 
      year: '၁၉၈၉', 
      title: 'မွေးဖွားခြင်း', 
      desc: '၁၉၈၉ ပြည့်နှစ်၊ ဗန်းမော်မြို့တွင် မွေးဖွားခဲ့သည်။', 
      icon: <User className="w-5 h-5" />,
      color: 'bg-amber-100 text-amber-600 border-amber-200'
    },
    { 
      year: '၂၀၁၁', 
      title: 'လုပ်ငန်းစတင်ခြင်း', 
      desc: 'အိမ်ထောင်ပြုပြီးနောက် စက်ပစ္စည်းအရောင်းအလုပ်ကို စတင်လုပ်ကိုင်ခဲ့သည်။', 
      icon: <Briefcase className="w-5 h-5" />,
      color: 'bg-orange-100 text-orange-600 border-orange-200'
    },
    { 
      year: '၂၀၁၅', 
      title: 'မန္တလေးသို့ ပြောင်းရွှေ့ခြင်း', 
      desc: 'မန္တလေးမြို့တွင် ကိုယ်ပိုင်စက်ပစ္စည်းအရောင်းဆိုင်ကို အောင်မြင်စွာ တည်ထောင်ခဲ့သည်။', 
      icon: <MapPin className="w-5 h-5" />,
      color: 'bg-rose-100 text-rose-600 border-rose-200'
    },
    { 
      year: '၂၀၂၃', 
      title: 'ရွှေလာဘ်စံ ရွှေဆိုင်', 
      desc: 'ရွှေလာဘ်စံ ရွှေဆိုင်ကို အောင်မြင်စွာ ဖွင့်လှစ်ကာ လုပ်ငန်းသစ် စတင်ခဲ့သည်။', 
      icon: <ShoppingBag className="w-5 h-5" />,
      color: 'bg-yellow-100 text-yellow-600 border-yellow-200'
    },
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 overflow-x-hidden selection:bg-amber-100 selection:text-amber-900 font-sans">
      
      {/* Navigation Bar - ခေတ်မီ Glassmorphism ဒီဇိုင်း */}
      <nav className="fixed top-0 inset-x-0 z-[100] bg-white/80 backdrop-blur-md border-b border-slate-200/50">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-600 to-orange-400 flex items-center justify-center text-white shadow-lg shadow-amber-200/50">
              <Star className="w-6 h-6 fill-current" />
            </div>
            <span className="text-xl font-black tracking-tight text-slate-800 hidden sm:block uppercase">
              Genesys <span className="text-amber-600">Legacy</span>
            </span>
          </div>
          
          <div className="flex bg-slate-100/80 p-1 rounded-2xl border border-slate-200 shadow-inner">
            <button 
              onClick={() => setActiveTab('entrepreneur')}
              className={`flex items-center gap-2 px-5 py-2 rounded-xl text-sm font-bold transition-all duration-300 cursor-pointer ${
                activeTab === 'entrepreneur' 
                ? 'bg-white text-amber-700 shadow-sm ring-1 ring-black/5' 
                : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              <Briefcase className="w-4 h-4" /> လုပ်ငန်းရှင်
            </button>
            <button 
              onClick={() => setActiveTab('student')}
              className={`flex items-center gap-2 px-5 py-2 rounded-xl text-sm font-bold transition-all duration-300 cursor-pointer ${
                activeTab === 'student' 
                ? 'bg-white text-blue-700 shadow-sm ring-1 ring-black/5' 
                : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              <GraduationCap className="w-4 h-4" /> ကျောင်းသား
            </button>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-24">
        {activeTab === 'entrepreneur' ? (
          /* Profile 1: လုပ်ငန်းရှင် ပရိုဖိုင် */
          <div className="max-w-6xl mx-auto px-6 space-y-24 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            
            {/* Hero Section */}
            <section className="relative group text-center space-y-8">
              <div className="absolute -top-24 -left-24 w-96 h-96 bg-amber-200/20 rounded-full blur-[100px] opacity-50"></div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-100 text-amber-700 text-xs font-bold tracking-widest uppercase leading-loose">
                <Sparkles className="w-3 h-3" /> အစဉ်အလာနှင့် ဦးဆောင်မှု
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.6] md:leading-[1.5] mb-4">
                မျှော်မှန်းချက်ကြီးမားသော <br/> 
                <span className="bg-gradient-to-r from-amber-600 via-orange-500 to-yellow-600 bg-clip-text text-transparent">စီးပွားရေးလုပ်ငန်းရှင်</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-500 max-w-3xl mx-auto leading-[1.8] font-medium">
                "ဘဝတွင် ရိုးသားမှု၊ ကြိုးစားမှုနှင့် ကူညီမှုဆိုသည့် မူဝါဒများကို အမြဲလိုက်နာလျက်ရှိသည်။"
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                 <div className="flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 rounded-2xl shadow-sm text-sm text-slate-600 font-bold hover:border-amber-300 transition-colors">
                   <MapPin className="w-4 h-4 text-amber-600" /> မန္တလေးမြို့၊ မြန်မာနိုင်ငံ
                 </div>
              </div>

              {/* လုပ်ငန်းရှင်၏ ပုံရိပ် Placeholder */}
              <div className="mt-12 w-full max-w-4xl mx-auto h-[400px] bg-slate-200 rounded-[3rem] overflow-hidden flex items-center justify-center border-8 border-white shadow-2xl relative">
                <img 
                  src="https://picsum.photos/seed/entrepreneur/1200/600" 
                  alt="Entrepreneur Profile" 
                  className="w-full h-full object-cover opacity-80"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-12">
                   <div className="text-white text-left">
                      <h3 className="text-2xl font-bold">ဦး Genesys</h3>
                      <p className="opacity-80">တည်ထောင်သူနှင့် အုပ်ချုပ်မှုဒါရိုက်တာ</p>
                   </div>
                </div>
              </div>
            </section>

            {/* အဓိက တန်ဖိုးထားမှုများ (Core Values) */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { label: 'ရိုးသားမှု', text: 'လုပ်ငန်းတိုင်း၏ အုတ်မြစ်မှာ ရိုးသားဖြောင့်မတ်မှုပင် ဖြစ်သည်။', icon: <Award className="text-amber-500" /> },
                { label: 'ကြိုးစားမှု', text: 'ဇွဲနပဲနှင့် ကြိုးစားအားထုတ်မှုသည် အောင်မြင်မှု၏ လျှို့ဝှက်ချက်ဖြစ်သည်။', icon: <Star className="text-orange-500" /> },
                { label: 'ကူညီမှု', text: 'လူမှုပတ်ဝန်းကျင်ကို ပြန်လည်ကူညီခြင်းဖြင့် စစ်မှန်သောအောင်မြင်မှုကို ရယူသည်။', icon: <Heart className="text-rose-500" /> }
              ].map((v, i) => (
                <div key={i} className="group bg-white border border-slate-100 p-10 rounded-[3rem] shadow-sm hover:shadow-xl transition-all duration-500">
                  <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-8 group-hover:bg-amber-50 transition-colors">
                    {React.cloneElement(v.icon, { className: 'w-8 h-8' })}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{v.label}</h3>
                  <p className="text-slate-500 leading-[1.8]">{v.text}</p>
                </div>
              ))}
            </section>

            {/* Timeline Section */}
            <section className="space-y-12">
              <div className="text-center space-y-4">
                <h2 className="text-3xl md:text-4xl font-black">လုပ်ငန်းခွင် <span className="text-amber-600">ဖြတ်သန်းမှု</span></h2>
                <p className="text-slate-500">အောင်မြင်မှုဆီသို့ လျှောက်လှမ်းခဲ့သော ခရီးစဉ်</p>
              </div>
              
              <div className="relative max-w-4xl mx-auto">
                <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-slate-200 -translate-x-1/2 hidden md:block"></div>
                
                <div className="space-y-12">
                  {businessTimeline.map((item, index) => (
                    <div key={index} className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                      <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-4 border-amber-500 z-10"></div>
                      
                      <div className="w-full md:w-1/2 space-y-4">
                        <div className={`inline-flex items-center gap-2 px-4 py-1 rounded-full border text-sm font-bold ${item.color}`}>
                          {item.year}
                        </div>
                        <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                          <div className="flex items-center gap-4 mb-4">
                            <div className="p-3 rounded-xl bg-slate-50">
                              {item.icon}
                            </div>
                            <h4 className="text-xl font-bold">{item.title}</h4>
                          </div>
                          <p className="text-slate-500 leading-[1.8]">{item.desc}</p>
                        </div>
                      </div>
                      <div className="hidden md:block w-1/2"></div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Business Portfolio */}
            <section className="space-y-12">
               <div className="flex flex-col md:flex-row items-end justify-between gap-6">
                  <div className="space-y-4">
                    <h2 className="text-3xl md:text-4xl font-black">လက်ရှိ <span className="text-amber-600">လုပ်ငန်းများ</span></h2>
                    <p className="text-slate-500">အောင်မြင်စွာ လည်ပတ်လျက်ရှိသော စီးပွားရေးလုပ်ငန်းများ</p>
                  </div>
                  <button className="flex items-center gap-2 text-amber-600 font-bold hover:gap-3 transition-all cursor-pointer">
                    အားလုံးကြည့်ရန် <ArrowRight className="w-5 h-5" />
                  </button>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="group relative h-[400px] rounded-[3rem] overflow-hidden shadow-lg">
                    <img 
                      src="https://picsum.photos/seed/gold/800/600" 
                      alt="Gold Shop" 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-10 flex flex-col justify-end">
                      <h3 className="text-3xl font-bold text-white mb-2">ရွှေလာဘ်စံ</h3>
                      <p className="text-white/70 mb-6">အဆင့်မြင့် ရွှေထည်နှင့် ကျောက်မျက်ရတနာ အရောင်းဆိုင်</p>
                      <div className="flex gap-3">
                        <span className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold">ရတနာ</span>
                        <span className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold">မန္တလေး</span>
                      </div>
                    </div>
                  </div>

                  <div className="group relative h-[400px] rounded-[3rem] overflow-hidden shadow-lg">
                    <img 
                      src="https://picsum.photos/seed/machinery/800/600" 
                      alt="Machinery" 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-10 flex flex-col justify-end">
                      <h3 className="text-3xl font-bold text-white mb-2">စက်ပစ္စည်းအရောင်းဆိုင်</h3>
                      <p className="text-white/70 mb-6">အရည်အသွေးမြင့် စက်မှုလက်မှုသုံး စက်ကိရိယာများ</p>
                      <div className="flex gap-3">
                        <span className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold">စက်မှု</span>
                        <span className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold">လက်ကား</span>
                      </div>
                    </div>
                  </div>
               </div>
            </section>
          </div>
        ) : (
          /* Profile 2: ကျောင်းသား ပရိုဖိုင် */
          <div className="max-w-6xl mx-auto px-6 space-y-24 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            
            {/* Hero Section */}
            <section className="relative text-center space-y-8">
              <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-200/20 rounded-full blur-[100px] opacity-50"></div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold tracking-widest uppercase">
                <GraduationCap className="w-3 h-3" /> ပညာရှာမှီးခြင်းနှင့် ဖွံ့ဖြိုးတိုးတက်မှု
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.6] md:leading-[1.5] mb-4">
                စဉ်ဆက်မပြတ် <br/> 
                <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-600 bg-clip-text text-transparent">လေ့လာသင်ယူသူ</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-500 max-w-3xl mx-auto leading-[1.8] font-medium">
                "ပညာသည် ဘဝအတွက် အကောင်းဆုံး ရင်းနှီးမြှုပ်နှံမှု ဖြစ်သည်။"
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                 <div className="flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 rounded-2xl shadow-sm text-sm text-slate-600 font-bold">
                   <Book className="w-4 h-4 text-blue-600" /> ဆေးတက္ကသိုလ် (မန္တလေး)
                 </div>
              </div>

              <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                 <div className="aspect-square bg-blue-50 rounded-[3rem] overflow-hidden border-8 border-white shadow-xl">
                    <img 
                      src="https://picsum.photos/seed/study/600/600" 
                      alt="Student Life" 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                 </div>
                 <div className="flex flex-col justify-center text-left space-y-6 p-6">
                    <div className="space-y-2">
                       <h3 className="text-3xl font-bold">ပညာရေးခရီးစဉ်</h3>
                       <p className="text-slate-500">လက်ရှိတွင် ဆေးပညာရပ်များကို စိတ်အားထက်သန်စွာ လေ့လာလျက်ရှိသည်။</p>
                    </div>
                    <div className="space-y-4">
                       {[
                         { icon: <Stethoscope className="text-blue-500" />, label: 'ဆေးပညာရပ်များ', desc: 'လူသားတို့၏ ကျန်းမာရေးအတွက် အခြေခံဗဟုသုတများ' },
                         { icon: <Globe className="text-cyan-500" />, label: 'ဘာသာစကား', desc: 'အင်္ဂလိပ်စာနှင့် အခြားဘာသာစကားများ' },
                         { icon: <Palette className="text-indigo-500" />, label: 'အနုပညာ', desc: 'တီထွင်ဖန်တီးမှုနှင့် အနုပညာခံစားမှု' }
                       ].map((item, i) => (
                         <div key={i} className="flex items-start gap-4 p-4 rounded-2xl hover:bg-white hover:shadow-sm transition-all">
                            <div className="p-3 rounded-xl bg-slate-50">{item.icon}</div>
                            <div>
                               <h4 className="font-bold">{item.label}</h4>
                               <p className="text-sm text-slate-500">{item.desc}</p>
                            </div>
                         </div>
                       ))}
                    </div>
                 </div>
              </div>
            </section>

            {/* Hobbies & Interests */}
            <section className="space-y-12">
               <div className="text-center space-y-4">
                  <h2 className="text-3xl md:text-4xl font-black">ဝါသနာနှင့် <span className="text-blue-600">စိတ်ဝင်စားမှုများ</span></h2>
                  <p className="text-slate-500">အားလပ်ချိန်များတွင် ပြုလုပ်လေ့ရှိသော အရာများ</p>
               </div>

               <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {[
                    { icon: <Camera />, label: 'ဓာတ်ပုံရိုက်ခြင်း', color: 'bg-rose-50 text-rose-600' },
                    { icon: <Music />, label: 'ဂီတနားထောင်ခြင်း', color: 'bg-blue-50 text-blue-600' },
                    { icon: <Book />, label: 'စာဖတ်ခြင်း', color: 'bg-emerald-50 text-emerald-600' },
                    { icon: <Globe />, label: 'ခရီးသွားခြင်း', color: 'bg-amber-50 text-amber-600' }
                  ].map((hobby, i) => (
                    <div key={i} className="group p-8 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all text-center space-y-4">
                       <div className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center ${hobby.color} group-hover:scale-110 transition-transform`}>
                          {React.cloneElement(hobby.icon as React.ReactElement, { className: 'w-8 h-8' })}
                       </div>
                       <p className="font-bold text-slate-700">{hobby.label}</p>
                    </div>
                  ))}
               </div>
            </section>

            {/* Quote Section */}
            <section className="bg-slate-900 rounded-[4rem] p-12 md:p-24 text-center relative overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                  <div className="absolute top-10 left-10 w-64 h-64 bg-blue-500 rounded-full blur-[100px]"></div>
                  <div className="absolute bottom-10 right-10 w-64 h-64 bg-cyan-500 rounded-full blur-[100px]"></div>
               </div>
               <Quote className="w-16 h-16 text-blue-500/30 mx-auto mb-8" />
               <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight max-w-4xl mx-auto italic">
                 "ပညာဆိုတာ ကမ္ဘာကြီးကို ပြောင်းလဲပစ်ဖို့ အသုံးပြုနိုင်တဲ့ အစွမ်းထက်ဆုံး လက်နက်တစ်ခုပဲ ဖြစ်ပါတယ်။"
               </h2>
               <div className="mt-12 flex items-center justify-center gap-4">
                  <div className="w-12 h-px bg-white/20"></div>
                  <p className="text-blue-400 font-bold tracking-widest uppercase text-sm">Nelson Mandela</p>
                  <div className="w-12 h-px bg-white/20"></div>
               </div>
            </section>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 pt-24 pb-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center text-white">
                  <Star className="w-6 h-6 fill-current" />
                </div>
                <span className="text-xl font-black tracking-tight uppercase">Genesys <span className="text-amber-600">Legacy</span></span>
              </div>
              <p className="text-slate-500 max-w-sm leading-relaxed">
                ရိုးသားမှု၊ ကြိုးစားမှုနှင့် ကူညီမှုတို့ဖြင့် တည်ဆောက်ထားသော အနာဂတ်ခရီးစဉ်။
              </p>
              <div className="flex gap-4">
                 {[Camera, Music, Globe, Mail].map((Icon, i) => (
                   <a key={i} href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-amber-500 hover:text-white transition-all">
                      <Icon className="w-5 h-5" />
                   </a>
                 ))}
              </div>
            </div>
            
            <div className="space-y-6">
              <h4 className="font-bold text-slate-900">ကဏ္ဍများ</h4>
              <ul className="space-y-4 text-slate-500">
                <li><button onClick={() => setActiveTab('entrepreneur')} className="hover:text-amber-600 transition-colors cursor-pointer">လုပ်ငန်းရှင် ပရိုဖိုင်</button></li>
                <li><button onClick={() => setActiveTab('student')} className="hover:text-blue-600 transition-colors cursor-pointer">ကျောင်းသား ပရိုဖိုင်</button></li>
                <li><a href="#" className="hover:text-slate-900 transition-colors">လုပ်ငန်းများ</a></li>
                <li><a href="#" className="hover:text-slate-900 transition-colors">ပညာရေး</a></li>
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="font-bold text-slate-900">ဆက်သွယ်ရန်</h4>
              <ul className="space-y-4 text-slate-500">
                <li className="flex items-center gap-3"><Mail className="w-4 h-4" /> info@genesyslegacy.com</li>
                <li className="flex items-center gap-3"><Phone className="w-4 h-4" /> +၉၅ ၉...</li>
                <li className="flex items-center gap-3"><MapPin className="w-4 h-4" /> မန္တလေးမြို့</li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
            <p>© ၂၀၂၆ Genesys Legacy. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-slate-600 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-slate-600 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
