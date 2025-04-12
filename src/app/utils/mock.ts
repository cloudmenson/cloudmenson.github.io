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
    name: "Test",
    photo: Ksenia,
    socials: [
      { link: "#", icon: Inst },
      { link: "#", icon: TikTok },
    ],
    description:
      "",
  },
  {
    name: "Pavlo",
    photo: Pavlo,
    socials: [
      { link: "#", icon: Inst },
      { link: "#", icon: TikTok },
    ],
    description:
      "I’m Pavlo, and within just a month, I’ve reached the final interviews with three top airlines: Emirates, Qatar Airways, and Etihad. With experience at Wizz Air, I’ve learned that my superpower is communication — it’s the key to success in this industry. I know the secret to landing a job at one of the top Arab airlines, and I’m here to guide you through every step. My sessions aren’t just about preparation — they’re about building confidence, enjoying the process, and unlocking your full potential. I truly believe that anyone can get there — just like I did. All it takes is the right mindset, a bit of effort, and the right support. Together, we can achieve anything. Let’s make it together!",
  },
];

export const menuNavigation = [
  { label: "Про нас", href: "#about" },
  { label: "Ментори", href: "#mentors" },
  { label: "Запис", href: "#booking" },
];

export const faq = [
  {
    question: "Чому обирають саме наші курси?",
    answer:
      "Безкоштовних ресурсів справді багато, але їм часто бракує структури, глибини та актуальності. Ми надаємо перевірену інформацію з перших вуст від реальних бортпровідників, які пройшли весь шлях. Це економить вам час і значно підвищує шанси на успіх.",
  },
  {
    question: "Чи потрібні знання іноземних мов? Які саме? На якому рівні?",
    answer:
      "Так, обов’язково потрібно знати англійську мову на розмовному рівні. Знання додаткових мов — таких як іспанська, французька, німецька або арабська — буде значною перевагою. Але якщо ви не впевнені у своєму рівні або хочете його перевірити — не хвилюйтеся! Наші ментори проведуть оцінку вашого рівня англійської та за потреби нададуть додаткові заняття, які допоможуть вам підтягнути знання до рівня, необхідного для успішного проходження інтерв’ю.",
  },
  {
    question: "З якого віку можна працювати бортпровідником?",
    answer:
      "Це залежить від авіакомпанії. Зазвичай мінімальний вік — 18 або 21 рік.",
  },
  {
    question: "Чи потрібно змінювати місце проживання?",
    answer:
      "У більшості випадків так. Багато авіакомпаній базуються в різних країнах світу, і переїзд на місце базування є частиною роботи.",
  },
  {
    question: "Чи потрібно проходити спеціалізовані курси до подачі заявки?",
    answer:
      " Ні, проходити попередні курси не обов’язково. Після успішного відбору авіакомпанія організує повний тренінг, де вас навчать всьому необхідному для роботи.",
  },
  {
    question: "Чи потрібно мати модельну зовнішність?",
    answer:
      "Це поширений стереотип. Важливо виглядати доглянуто, мати охайний вигляд і впевненість у собі, але ідеальні параметри “90-60-90” — давно в минулому.",
  },
  {
    question:
      "Що робити, якщо я дуже хочу стати бортпровідником, але сумніваюсь у своїх шансах?",
    answer:
      "Ми вас підготуємо до співбесіди, включно з рольовими іграми та перевірками. Сумніви — це нормально. Найголовніше — спробувати. Якщо ви дійсно цього прагнете і готові старатися, результат обов’язково буде.",
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
