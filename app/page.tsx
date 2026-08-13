"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  ClipboardCheck,
  Clock3,
  FileBarChart,
  Flag,
  FolderKanban,
  LayoutDashboard,
  LineChart,
  Menu,
  MessageSquareText,
  Play,
  ShieldCheck,
  Target,
  Users2,
  Zap
} from "lucide-react";

type IconType = typeof FolderKanban;

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 }
};

const features: Array<{ icon: IconType; title: string; description: string }> = [
  {
    icon: FolderKanban,
    title: "Gestion des projets",
    description: "Planifiez les initiatives, structurez les responsabilités et gardez une vision claire de chaque étape."
  },
  {
    icon: ClipboardCheck,
    title: "Suivi des tâches",
    description: "Priorisez les actions, suivez l'avancement et identifiez rapidement les points qui demandent une décision."
  },
  {
    icon: MessageSquareText,
    title: "Collaboration d'équipe",
    description: "Centralisez les échanges, les documents et les décisions pour réduire les réunions inutiles."
  },
  {
    icon: LayoutDashboard,
    title: "Tableaux de bord personnalisés",
    description: "Composez des vues adaptées aux managers, aux équipes projet et aux directions opérationnelles."
  },
  {
    icon: FileBarChart,
    title: "Rapports détaillés",
    description: "Transformez les données de travail en rapports lisibles pour piloter les résultats avec précision."
  },
  {
    icon: Target,
    title: "Gestion des objectifs",
    description: "Alignez les objectifs d'équipe avec les projets en cours et mesurez les progrès semaine après semaine."
  }
];

const benefits = [
  { icon: Clock3, title: "Gain de temps", text: "Moins de recherche d'information, plus d'exécution sur les priorités importantes." },
  { icon: FolderKanban, title: "Meilleure organisation", text: "Un espace structuré pour chaque projet, chaque équipe et chaque échéance." },
  { icon: MessageSquareText, title: "Communication simplifiée", text: "Des échanges contextualisés qui restent liés aux tâches et aux décisions." },
  { icon: LineChart, title: "Suivi clair des performances", text: "Des indicateurs utiles pour comprendre ce qui avance et ce qui bloque." }
];

const plans = [
  {
    name: "Starter",
    price: "12 €",
    description: "Pour les petites équipes qui veulent structurer leur travail.",
    features: ["5 projets actifs", "Tableau des tâches", "Calendrier partagé", "Support par email"]
  },
  {
    name: "Professional",
    price: "29 €",
    description: "Pour les équipes en croissance qui pilotent plusieurs projets.",
    features: ["Projets illimités", "Tableaux de bord avancés", "Rapports mensuels", "Invités externes", "Support prioritaire"],
    highlighted: true
  },
  {
    name: "Business",
    price: "79 €",
    description: "Pour les organisations qui ont besoin de contrôle et de visibilité.",
    features: ["Espaces multi-équipes", "Rapports personnalisés", "Permissions avancées", "Accompagnement dédié"]
  }
];

const faqs = [
  {
    question: "Combien de temps faut-il pour configurer FlowDesk ?",
    answer: "La plupart des équipes créent leur espace, leurs premiers projets et leurs vues principales en moins d'une heure."
  },
  {
    question: "Puis-je changer de formule à tout moment ?",
    answer: "Oui. Vous pouvez passer à une formule supérieure ou ajuster votre abonnement depuis votre espace de facturation."
  },
  {
    question: "Comment FlowDesk protège-t-il les données ?",
    answer: "La plateforme s'appuie sur le chiffrement, des permissions granulaires et des contrôles d'accès conçus pour les équipes professionnelles."
  },
  {
    question: "FlowDesk convient-il aux équipes à distance ?",
    answer: "Oui. Les vues partagées, les commentaires et les calendriers permettent de collaborer efficacement, même avec des équipes distribuées."
  }
];

function SectionIntro({ label, title, text, dark = false }: { label: string; title: string; text?: string; dark?: boolean }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeUp}
      transition={{ duration: 0.6 }}
      className="mx-auto mb-12 max-w-3xl text-center"
    >
      <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue">{label}</p>
      <h2 className={"mt-4 text-3xl font-extrabold tracking-tight sm:text-5xl " + (dark ? "text-white" : "text-navy")}>{title}</h2>
      {text && <p className={"mt-5 text-lg leading-8 " + (dark ? "text-slate-300" : "text-slate-600")}>{text}</p>}
    </motion.div>
  );
}

function DashboardPreview({ compact = false }: { compact?: boolean }) {
  const tasks = [
    ["Refonte espace client", "En cours", "72%"],
    ["Campagne T3", "Validation", "48%"],
    ["Onboarding équipe", "Planifié", "86%"]
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 32, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.75, delay: 0.2, ease: "easeOut" }}
      className={"relative mx-auto max-w-6xl rounded-[28px] border border-white/70 bg-white/90 p-3 shadow-soft " + (compact ? "mt-0" : "mt-14")}
      aria-label="Aperçu du tableau de bord FlowDesk"
    >
      <div className="absolute -right-8 -top-8 hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-glow lg:block">
        <div className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-50 text-success"><CheckCircle2 size={20} /></span><div><p className="text-sm font-semibold text-navy">Objectif atteint</p><p className="text-xs text-slate-500">Cycle produit terminé</p></div></div>
      </div>
      <div className="overflow-hidden rounded-[22px] border border-slate-200 bg-slate-950 text-white">
        <div className="flex items-center gap-2 border-b border-white/10 bg-slate-900 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-red-400" />
          <span className="h-3 w-3 rounded-full bg-yellow-300" />
          <span className="h-3 w-3 rounded-full bg-green-400" />
          <span className="ml-3 truncate text-xs text-slate-400">flowdesk.app/workspace</span>
        </div>
        <div className="grid min-h-[500px] grid-cols-1 md:grid-cols-[220px_1fr]">
          <aside className="hidden border-r border-white/10 bg-slate-950 p-5 md:block">
            <div className="mb-8 flex items-center gap-3">
              <div className="grid h-9 w-9 place-items-center rounded-lg bg-blue text-white"><LayoutDashboard size={18} /></div>
              <strong>FlowDesk</strong>
            </div>
            {["Vue globale", "Projets", "Tâches", "Calendrier", "Rapports"].map((item, index) => (
              <div key={item} className={"mb-2 flex items-center justify-between rounded-lg px-3 py-2 text-sm " + (index === 0 ? "bg-white text-navy" : "text-slate-400") }>
                <span>{item}</span>
                {index === 2 && <span className="rounded bg-blue/15 px-2 py-0.5 text-xs text-blue">12</span>}
              </div>
            ))}
          </aside>
          <main className="bg-slate-50 p-4 text-navy sm:p-6 lg:p-8">
            <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
              <div>
                <p className="text-sm font-medium text-blue">Espace Opérations</p>
                <h3 className="mt-1 text-2xl font-bold tracking-tight">Pilotage des projets</h3>
              </div>
              <div className="flex -space-x-2" aria-label="Membres de l'équipe">
                {["LC", "MA", "SR", "JT"].map((person) => <span key={person} className="grid h-9 w-9 place-items-center rounded-full border-2 border-white bg-slate-900 text-xs font-semibold text-white">{person}</span>)}
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {[["Projets actifs", "24", "+18%"], ["Tâches terminées", "1 284", "+31%"], ["Objectifs atteints", "92%", "+9%"]].map(([label, value, trend]) => (
                <div key={label} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <p className="text-sm text-slate-500">{label}</p>
                  <div className="mt-3 flex items-end justify-between"><strong className="text-3xl">{value}</strong><span className="text-sm font-semibold text-success">{trend}</span></div>
                </div>
              ))}
            </div>
            <div className="mt-4 grid gap-4 lg:grid-cols-[1.4fr_0.9fr]">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="mb-5 flex items-center justify-between"><h4 className="font-semibold">Priorités de la semaine</h4><span className="text-sm text-slate-500">Équipe produit</span></div>
                {tasks.map(([name, status, progress]) => (
                  <div key={name} className="mb-4 rounded-xl border border-slate-100 bg-slate-50 p-4 last:mb-0">
                    <div className="flex items-center justify-between gap-4"><span className="font-medium">{name}</span><span className="text-xs font-semibold text-blue">{status}</span></div>
                    <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-200"><div className="h-full rounded-full bg-blue" style={{ width: progress }} /></div>
                  </div>
                ))}
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="mb-5 flex items-center gap-2"><CalendarDays size={18} className="text-blue" /><h4 className="font-semibold">Calendrier</h4></div>
                <div className="grid grid-cols-7 gap-2 text-center text-xs text-slate-500">
                  {["L", "M", "M", "J", "V", "S", "D"].map((day, index) => <span key={day + index}>{day}</span>)}
                  {Array.from({ length: 28 }, (_, i) => <span key={i} className={"rounded-lg py-2 " + ([4, 11, 15, 21].includes(i) ? "bg-blue text-white" : "bg-slate-50")}>{i + 1}</span>)}
                </div>
                <div className="mt-5 rounded-xl bg-emerald-50 p-4 text-sm text-emerald-700"><strong>3 jalons</strong> prévus cette semaine</div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </motion.div>
  );
}

export default function Home() {
  return (
    <main className="overflow-hidden bg-white">
      <section className="relative min-h-screen bg-mist pb-20 pt-6 grid-bg">
        <motion.div className="absolute left-[8%] top-28 h-40 w-40 rounded-full bg-blue/10 blur-3xl" animate={{ y: [0, 18, 0], scale: [1, 1.08, 1] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} />
        <motion.div className="absolute right-[7%] top-44 h-56 w-56 rounded-full bg-success/10 blur-3xl" animate={{ y: [0, -20, 0], scale: [1, 1.06, 1] }} transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }} />
        <header className="section-shell relative z-10 flex items-center justify-between rounded-2xl border border-white/80 px-4 py-3 glass">
          <a href="#" className="flex items-center gap-3 font-bold tracking-tight" aria-label="FlowDesk accueil"><span className="grid h-9 w-9 place-items-center rounded-lg bg-navy text-white">F</span>FlowDesk</a>
          <nav className="hidden items-center gap-7 text-sm font-medium text-slate-600 md:flex" aria-label="Navigation principale">
            <a href="#features" className="transition hover:text-navy">Produit</a>
            <a href="#benefits" className="transition hover:text-navy">Solutions</a>
            <a href="#pricing" className="transition hover:text-navy">Tarifs</a>
            <a href="#faq" className="transition hover:text-navy">FAQ</a>
          </nav>
          <a href="#pricing" className="hidden rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue md:inline-flex">Essayer maintenant</a>
          <button className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 md:hidden" aria-label="Ouvrir le menu"><Menu size={18} /></button>
        </header>
        <div className="section-shell relative z-10 pt-20 text-center sm:pt-24">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.65 }} className="mx-auto inline-flex items-center gap-2 rounded-full border border-blue/20 bg-white px-4 py-2 text-sm font-medium text-blue shadow-sm">
            <Zap size={16} /> Plateforme de travail pour équipes exigeantes
          </motion.div>
          <motion.h1 initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.7, delay: 0.08 }} className="mx-auto mt-8 max-w-5xl text-4xl font-extrabold leading-[1.05] tracking-tight text-navy sm:text-6xl lg:text-7xl">
            Organisez vos projets. Collaborez efficacement. Atteignez vos objectifs.
          </motion.h1>
          <motion.p initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.7, delay: 0.16 }} className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            FlowDesk aide les équipes à centraliser leurs projets, suivre leurs tâches et améliorer leur organisation au quotidien.
          </motion.p>
          <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.7, delay: 0.24 }} className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="#pricing" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-blue px-7 py-3 font-semibold text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-blue/90">Commencer gratuitement <ArrowRight size={18} /></a>
            <a href="#preview" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-3 font-semibold text-navy transition hover:-translate-y-0.5 hover:border-blue/30 hover:text-blue"><Play size={17} /> Voir la démo</a>
          </motion.div>
          <DashboardPreview />
        </div>
      </section>

      <section id="features" className="bg-white py-24 sm:py-28">
        <div className="section-shell">
          <SectionIntro label="Fonctionnalités" title="Tout ce dont votre équipe a besoin pour mieux travailler" text="Une suite claire et cohérente pour organiser les projets, fluidifier la collaboration et garder le cap sur les résultats." />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.article key={feature.title} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp} transition={{ duration: 0.55, delay: index * 0.05 }} className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-blue/30 hover:shadow-soft">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-blue/10 text-blue transition group-hover:bg-blue group-hover:text-white"><Icon size={22} /></div>
                  <h3 className="mt-6 text-xl font-bold tracking-tight text-navy">{feature.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{feature.description}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-mist py-24 sm:py-28">
        <div className="section-shell">
          <SectionIntro label="Méthode" title="Une mise en place simple, pensée pour avancer vite" />
          <div className="relative grid gap-6 lg:grid-cols-3">
            <div className="absolute left-0 right-0 top-10 hidden h-px bg-gradient-to-r from-transparent via-blue/40 to-transparent lg:block" />
            {["Créez votre espace de travail", "Organisez vos projets", "Suivez vos résultats"].map((step, index) => (
              <motion.div key={step} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.55, delay: index * 0.08 }} className="relative rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
                <span className="grid h-20 w-20 place-items-center rounded-2xl bg-navy text-2xl font-extrabold text-white shadow-glow">{index + 1}</span>
                <h3 className="mt-7 text-2xl font-bold tracking-tight text-navy">{step}</h3>
                <p className="mt-3 leading-7 text-slate-600">Configurez vos vues, vos priorités et vos rituels de suivi pour donner à l'équipe un cadre de travail immédiatement lisible.</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="preview" className="bg-navy py-24 text-white sm:py-28">
        <div className="section-shell">
          <SectionIntro dark label="Produit" title="Un tableau de bord réaliste pour piloter chaque semaine" text="FlowDesk rassemble les projets, les tâches, les statistiques, le calendrier et les membres d'équipe dans une interface dense, claire et agréable à consulter." />
          <DashboardPreview compact />
        </div>
      </section>

      <section id="benefits" className="bg-white py-24 sm:py-28">
        <div className="section-shell grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.6 }}>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue">Bénéfices</p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-navy sm:text-5xl">Une plateforme pensée pour les équipes modernes</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">FlowDesk donne un rythme de travail plus clair aux équipes qui doivent livrer mieux, collaborer plus vite et suivre leurs résultats sans complexité inutile.</p>
            <div className="mt-8 flex flex-wrap gap-3 text-sm font-semibold text-slate-600">
              <span className="rounded-full bg-slate-100 px-4 py-2">PME</span>
              <span className="rounded-full bg-slate-100 px-4 py-2">Agences</span>
              <span className="rounded-full bg-slate-100 px-4 py-2">Services internes</span>
            </div>
          </motion.div>
          <div className="grid gap-4 sm:grid-cols-2">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div key={benefit.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.55, delay: index * 0.05 }} className="rounded-2xl border border-slate-200 bg-mist p-6 transition hover:-translate-y-1 hover:bg-white hover:shadow-soft">
                  <Icon className="text-blue" size={24} />
                  <h3 className="mt-5 text-xl font-bold text-navy">{benefit.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{benefit.text}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-mist py-24 sm:py-28">
        <div className="section-shell">
          <SectionIntro label="Clients" title="Des équipes plus alignées, semaine après semaine" />
          <div className="grid gap-5 lg:grid-cols-3">
            {[
              ["FlowDesk a remplacé plusieurs outils dispersés. Nos chefs de projet savent enfin où trouver les décisions, les tâches et les indicateurs.", "Camille Moreau", "Directrice opérations, Novalys Conseil"],
              ["L'interface est rapide, claire et suffisamment robuste pour suivre nos projets clients sans alourdir le quotidien des équipes.", "Adrien Vasseur", "Responsable delivery, Studio Hélios"],
              ["Nous avons gagné en visibilité sur les priorités et les jalons. Les réunions hebdomadaires sont plus courtes et beaucoup plus utiles.", "Sarah Benali", "COO, Quantiva Group"]
            ].map(([quote, name, role], index) => (
              <motion.figure key={name} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.55, delay: index * 0.06 }} className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
                <blockquote className="text-lg leading-8 text-slate-700">“{quote}”</blockquote>
                <figcaption className="mt-7 flex items-center gap-4">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-navy text-sm font-bold text-white">{name.split(" ").map((part) => part[0]).join("")}</span>
                  <span><strong className="block text-navy">{name}</strong><span className="text-sm text-slate-500">{role}</span></span>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="bg-white py-24 sm:py-28">
        <div className="section-shell">
          <SectionIntro label="Tarifs" title="Des formules lisibles pour chaque niveau d'équipe" text="Commencez simplement, puis ajoutez de la capacité quand vos projets et vos équipes grandissent." />
          <div className="grid gap-5 lg:grid-cols-3">
            {plans.map((plan) => (
              <motion.article key={plan.name} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.55 }} className={"relative rounded-2xl border p-7 shadow-sm transition hover:-translate-y-1 " + (plan.highlighted ? "border-blue bg-navy text-white shadow-glow" : "border-slate-200 bg-white text-navy hover:shadow-soft") }>
                {plan.highlighted && <span className="absolute right-6 top-6 rounded-full bg-blue px-3 py-1 text-xs font-bold text-white">Le plus choisi</span>}
                <h3 className="text-2xl font-bold">{plan.name}</h3>
                <p className={"mt-3 min-h-14 leading-7 " + (plan.highlighted ? "text-slate-300" : "text-slate-600")}>{plan.description}</p>
                <div className="mt-7 flex items-end gap-2"><strong className="text-5xl font-extrabold">{plan.price}</strong><span className={plan.highlighted ? "pb-2 text-slate-300" : "pb-2 text-slate-500"}>/ utilisateur</span></div>
                <a href="#" className={"mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 font-semibold transition " + (plan.highlighted ? "bg-white text-navy hover:bg-slate-100" : "bg-navy text-white hover:bg-blue")}>Choisir {plan.name}<ChevronRight size={17} /></a>
                <ul className="mt-7 space-y-3">
                  {plan.features.map((item) => <li key={item} className="flex gap-3"><CheckCircle2 className={plan.highlighted ? "mt-0.5 text-success" : "mt-0.5 text-blue"} size={18} /><span className={plan.highlighted ? "text-slate-200" : "text-slate-600"}>{item}</span></li>)}
                </ul>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="bg-mist py-24 sm:py-28">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue">FAQ</p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-navy sm:text-5xl">Questions fréquentes</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">Les réponses essentielles sur la mise en place, les tarifs, la sécurité et la collaboration.</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <motion.details key={faq.question} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.5 }} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm open:shadow-soft">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-bold text-navy">{faq.question}<span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-slate-100 text-blue transition group-open:rotate-90"><ChevronRight size={18} /></span></summary>
                <p className="mt-4 leading-7 text-slate-600">{faq.answer}</p>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy px-4 py-20 text-white">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.6 }} className="mx-auto max-w-5xl rounded-[28px] border border-white/10 bg-white/[0.04] px-6 py-14 text-center shadow-glow sm:px-12">
          <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-blue"><Flag size={25} /></div>
          <h2 className="mt-7 text-3xl font-extrabold tracking-tight sm:text-5xl">Prêt à transformer votre façon de travailler ?</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">Créez un espace FlowDesk, invitez votre équipe et reprenez le contrôle de vos projets dès aujourd'hui.</p>
          <a href="#pricing" className="mt-9 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-7 py-3 font-semibold text-navy transition hover:-translate-y-0.5 hover:bg-slate-100">Créer mon espace gratuitement <ArrowRight size={18} /></a>
        </motion.div>
      </section>

      <footer className="bg-white py-14">
        <div className="section-shell">
          <div className="grid gap-10 border-b border-slate-200 pb-10 md:grid-cols-[1.2fr_repeat(5,1fr)]">
            <div>
              <a href="#" className="flex items-center gap-3 font-bold tracking-tight text-navy"><span className="grid h-9 w-9 place-items-center rounded-lg bg-navy text-white">F</span>FlowDesk</a>
              <p className="mt-4 max-w-xs leading-7 text-slate-600">La plateforme de productivité et de gestion de projets conçue pour les équipes modernes.</p>
            </div>
            {[
              ["Produit", "Projets", "Tâches", "Rapports"],
              ["Solutions", "Équipes produit", "Agences", "Opérations"],
              ["Entreprise", "À propos", "Carrières", "Presse"],
              ["Ressources", "Guides", "Centre d'aide", "Webinaires"],
              ["Contact", "hello@flowdesk.co", "Support", "Paris"]
            ].map(([heading, ...links]) => (
              <div key={heading}>
                <h3 className="font-bold text-navy">{heading}</h3>
                <ul className="mt-4 space-y-3 text-sm text-slate-600">
                  {links.map((link) => <li key={link}><a href="#" className="transition hover:text-blue">{link}</a></li>)}
                </ul>
              </div>
            ))}
          </div>
          <div className="flex flex-col justify-between gap-4 pt-7 text-sm text-slate-500 sm:flex-row"><p>© 2026 FlowDesk. Tous droits réservés.</p><p>Confidentialité · Conditions · Sécurité</p></div>
        </div>
      </footer>
    </main>
  );
}
