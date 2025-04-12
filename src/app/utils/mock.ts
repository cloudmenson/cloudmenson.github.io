import { Clock, UserCheck, PenLine } from "lucide-react";

import {
  Inst,
  Stan,
  Pavlo,
  Ksenia,
  TikTok,
  Benefit1,
  Benefit2,
  Benefit3,
  Benefit4,
  Benefit5,
} from "@/app/assets";

export const mentors = [
  {
    name: "Stanislav",
    photo: Stan,
    socials: [
      { link: "#", icon: Inst },
      { link: "#", icon: TikTok },
    ],
    description:
      "I’m Stan — a people person with a passion for helping and teaching others. My second passion? Aviation. And when you put the two together — it’s the perfect match! I truly believe that anyone can fly — whether your dream is to become a cabin crew member or a pilot. I’ve earned my Private Pilot License and love sharing the skies with my friends and family. In our session, I’ll give you real insights, honest advice, and a fresh perspective from someone who’s been through it. Let’s take this step together — book your session and let’s make it happen!",
  },
  {
    name: "Ksenia",
    photo: Ksenia,
    socials: [
      { link: "#", icon: Inst },
      { link: "#", icon: TikTok },
    ],
    description:
      "Hi, I'm Ksenia! With 4 years of experience in aviation and 9 years of working with people across different fields and countries (Ukraine, Austria, Albania, Poland), I’ve had the opportunity to learn and grow in diverse environments. I successfully passed an interview with Qatar Airways and received a job offer. However, my personal goal is to live and work in Europe, which is why I’ve chosen to pursue a career with Wizz Air. Book a Consultation with me, and I will help you to start your journey in aviation and pass the interview successfully.",
  },
  {
    name: "Pavlo",
    photo: Pavlo,
    socials: [
      { link: "#", icon: Inst },
      { link: "#", icon: TikTok },
    ],
    description:
      "I’m Pavlo, 23 years old, and within just a month, I’ve reached the final interviews with three top airlines: Emirates, Qatar Airways, and Etihad. I’m here to help you earn your wings and achieve your dreams. With experience at Wizz Air, I’ve discovered that my superpower is communication because that’s the key to success. My sessions are all about creating a relaxed, enjoyable vibe where we connect, share, and learn. It’s not just about preparation — it’s about enjoying the journey. Let’s make it happen together!",
  },
];

export const menuNavigation = [
  { label: "Про нас", href: "#about" },
  { label: "Ментори", href: "#mentors" },
  { label: "Запис", href: "#booking" },
];

export const questions = [
  {
    question: "Чи потрібні знання іноземних мов і якому рівні?",
    answer:
      "Так, базовий рівень англійської (A2-B1) обовʼязковий. Ви маєте вміти розуміти інструкції та спілкуватися з пасажирами.",
  },
  {
    question: "З якого віку можна працевлаштуватися в авіакомпанію.",
    answer:
      "Більшість авіакомпаній приймають кандидатів з 18 або 21 року залежно від країни та правил авіалінії.",
  },
  {
    question: "Чи потрібно змінювати місце проживання.",
    answer:
      "Іноді так, якщо база авіакомпанії знаходиться в іншому місті чи країні.",
  },
  {
    question: "Чи треба мати вищу освіту",
    answer: "Ні, вища освіта не обовʼязкова, але буде плюсом.",
  },
  {
    question: "Чи потрібен досвід роботи.",
    answer:
      "Ні, досвід не обовʼязковий. Ми допомагаємо підготуватись навіть з нуля.",
  },
  {
    question: "Чи потрібно мати модельну зовнішність ?",
    answer:
      "Ні, головне — охайність, ввічливість та вміння спілкуватися з людьми.",
  },
  {
    question: "Чи важко пройти співбесіду?",
    answer:
      "Ми вас підготуємо до співбесіди, включно з рольовими іграми та перевірками.",
  },
  {
    question: "Чи допомагаєте ви вивчати англійську мову?",
    answer:
      "Так, у нас є гайдбук та менторська допомога з англійської для підготовки.",
  },
];

export const courses = [
  {
    title: "Basic",
    price: 45,
    gradient: "from-purple-500 to-pink-600",
    color: "text-purple-400, text-pink-400",
    Icon: Clock,
    benefits: [
      "1.5-hour personal session with one of our mentors, including a full personal evaluation.",
      "Free guidebook.",
      "Access to the Learning Hub.",
      "2 role-play simulations.",
    ],
    buttonText: "Get Basic",
    link: "/signin",
  },
  {
    title: "Aviator",
    price: 75,
    color: "text-yellow-500, text-amber-600",
    gradient: "from-yellow-500 to-amber-600",
    lor: "",
    Icon: UserCheck,
    benefits: [
      "2-hour personal session with one of our mentors, including a full personal evaluation.",
      "Free guidebook.",
      "Access to the Learning Hub.",
      "24/7 mentorship support throughout your preparation process.",
      "5 role-play simulations.",
      "Personalized guidance on choosing the right outfit for your interview — feel confident and professional.",
      "Craft your cabin crew CV to achieve your goal.",
    ],
    buttonText: "Get Aviator",
    link: "/signin",
  },
  {
    title: "Craft your CV",
    price: 19.9,
    gradient: "from-blue-500 to-indigo-600",
    color: "text-blue-500, text-indigo-600",
    Icon: PenLine,
    benefits: ["Craft the perfect cabin crew CV to help you reach your goal."],
    buttonText: "Get Coaching",
    link: "/signin",
  },
];

export const benefits = [
  {
    src: Benefit4,
    title: "Тут може бути якийсь текст який описує шось",
    subtitle: "Якщо треба тут також буде текст",
  },
  {
    src: Benefit2,
    title: "Тут може бути якийсь текст який описує шось",
    subtitle: "Якщо треба тут також буде текст",
  },
  {
    src: Benefit3,
    title: "Тут може бути якийсь текст який описує шось",
    subtitle: "Якщо треба тут також буде текст",
  },
  {
    src: Benefit1,
    title: "Тут може бути якийсь текст який описує шось",
    subtitle: "Якщо треба тут також буде текст",
  },
  {
    src: Benefit5,
    title: "Тут може бути якийсь текст який описує шось",
    subtitle: "Якщо треба тут також буде текст",
  },
];
