import { motion } from "framer-motion";
import { Clock, UserCheck, PenLine } from "lucide-react";

export const Course = () => {
  return (
    <section className="py-[5vw] px-[2vw] bg-section-bg text-section-text">
      <div className="max-w-[90vw] mx-auto">
        <h2 className="text-[2vw] font-bold text-center mb-[3vw]">
          Що ви отримаєте
        </h2>

        <div className="flex flex-col md:flex-row gap-[2vw]">
          {/* Картка 1 */}
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative flex-1 p-[2vw] border border-white/20 rounded-xl bg-white/10 backdrop-blur-md shadow-md hover:shadow-xl  transition-all text-white overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-[0.3vw] bg-gradient-to-r from-blue-400 to-cyan-400" />

            <div className="flex flex-col h-full">
              <div className="mb-[1vw]">
                <Clock className="w-[3vw] h-[3vw] text-blue-300" />
              </div>

              <h3 className="text-[1.5vw] font-semibold mb-[1vw] text-white">
                Базовий курс
              </h3>

              <p className="text-[1vw] leading-relaxed">
                Навчитесь основам професії бортпровідника: безпека, етика,
                базові ситуації, комунікація з пасажирами.
              </p>

              <p className="text-[2vw] font-bold text-blue-300 mt-auto">$45</p>

              <button className="mt-[1vw] h-[3.2vw] px-[2vw] rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 text-white font-semibold shadow-md hover:shadow-lg hover:brightness-110 active:translate-y-[1px] transition-all">
                Записатись
              </button>
            </div>
          </motion.div>

          {/* Картка 2 */}
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="relative flex-1 p-[2vw] md:pt-[2.5vw] md:pb-[2.5vw] border border-white/20 rounded-xl bg-white/10 backdrop-blur-md shadow-md hover:shadow-xl  transition-all text-white overflow-hidden transform md:scale-[1.05] z-10"
          >
            <div className="absolute top-0 left-0 w-full h-[0.3vw] bg-gradient-to-r from-purple-400 to-pink-400" />

            <div className="flex flex-col h-full">
              <div className="mb-[1vw]">
                <UserCheck className="w-[3vw] h-[3vw] text-pink-300" />
              </div>

              <h3 className="text-[1.5vw] font-semibold mb-[1vw] text-white">
                Продвинутий курс
              </h3>

              <p className="text-[1vw] leading-relaxed">
                Отримайте особистого наставника, індивідуальний розбір,
                підготовку до співбесіди, та підтримку під час перших етапів
                кар’єри.
              </p>

              <p className="text-[2vw] font-bold text-pink-300 mt-auto">$75</p>

              <button className="mt-[1vw] h-[3.2vw] px-[2vw] rounded-full bg-gradient-to-r from-purple-400 to-pink-400 text-white font-semibold shadow-md hover:shadow-lg hover:brightness-110 active:translate-y-[1px] transition-all">
                Записатись
              </button>
            </div>
          </motion.div>

          {/* Картка 3 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            className="relative flex-1 p-[2vw] border border-white/20 rounded-xl bg-white/10 backdrop-blur-md shadow-md hover:shadow-xl transition-all text-white overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-[0.3vw] bg-gradient-to-r from-yellow-400 to-orange-400" />

            <div className="flex flex-col h-full">
              <div className="mb-[1vw]">
                <PenLine className="w-[3vw] h-[3vw] text-yellow-300" />
              </div>

              <h3 className="text-[1.5vw] font-semibold mb-[1vw] text-white">
                Craft your CV to achieve your goal
              </h3>

              <p className="text-[1vw] leading-relaxed">
                Індивідуальна робота над резюме, яке виділить вас серед інших
                кандидатів. Практичні поради, структура та приклади.
              </p>

              <p className="text-[2vw] font-bold text-yellow-300 mt-auto">
                $19.90
              </p>

              <button className="mt-[1vw] h-[3.2vw] px-[2vw] rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 text-white font-semibold shadow-md hover:shadow-lg hover:brightness-110 active:translate-y-[1px] transition-all">
                Записатись
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
