import { useModalStore } from "@/app/store/modalStore";
import { motion } from "framer-motion";
import { Clock, UserCheck, PenLine } from "lucide-react";

export const Course = () => {
  const { open } = useModalStore();

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
            className="relative flex-1 p-[2vw] mt-[2vw] border border-white/20 rounded-xl bg-white/10 backdrop-blur-md shadow-md hover:shadow-xl transition-all text-white overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-[0.3vw] bg-gradient-to-r from-blue-400 to-cyan-400" />

            <div className="flex flex-col h-full">
              <div className="mb-[1vw]">
                <Clock className="w-[3vw] h-[3vw] text-blue-300" />
              </div>

              <h3 className="text-[1.5vw] font-semibold mb-[1vw] text-white">
                Basic
              </h3>

              <ul className="text-[1vw] leading-relaxed list-disc list-inside space-y-[0.5vw] mb-[1vw]">
                <li>
                  1.5-hour personal session with one of our mentors, including a
                  full personal evaluation.
                </li>
                <li>Free guidebook.</li>
                <li>Access to the Learning Hub.</li>
                <li>2 role-play simulations.</li>
              </ul>

              <p className="text-[2vw] font-bold text-blue-300 mb-[1vw] mt-auto">
                $45
              </p>

              <motion.button
                onClick={open}
                whileTap={{ scale: 0.98 }}
                whileHover={{ scale: 1.02 }}
                className="text-[1vw] px-[2vw] py-[0.8vw] cursor-pointer rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 text-white font-semibold hover:bg-gray-200 transition-colors"
              >
                Get Basic
              </motion.button>
            </div>
          </motion.div>

          {/* Картка 2 */}
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="relative flex-1 p-[2vw] md:pt-[2.5vw] md:pb-[2.5vw]  border border-white/20 rounded-xl bg-white/10 backdrop-blur-md shadow-md hover:shadow-xl transition-all text-white overflow-hidden z-10"
          >
            <div className="absolute top-0 left-0 w-full h-[0.3vw] bg-gradient-to-r from-purple-400 to-pink-400" />

            <div className="flex flex-col h-full">
              <div className="mb-[1vw]">
                <UserCheck className="w-[3vw] h-[3vw] text-pink-300" />
              </div>

              <h3 className="text-[1.5vw] font-semibold mb-[1vw] text-white">
                Aviator
              </h3>

              <ul className="text-[1vw] leading-relaxed list-disc list-inside space-y-[0.5vw] mb-[1vw]">
                <li>
                  2-hour personal session with one of our mentors, including a
                  full personal evaluation.
                </li>
                <li>Free guidebook.</li>
                <li>Access to the Learning Hub.</li>
                <li>
                  24/7 mentorship support throughout your preparation process.
                </li>
                <li>5 role-play simulations.</li>
                <li>
                  Personalized guidance on choosing the right outfit for your
                  interview — feel confident and professional.
                </li>
                <li>Craft your cabin crew CV to achieve your goal.</li>
              </ul>

              <p className="text-[2vw] font-bold text-pink-300 mb-[1vw] mt-auto">
                $75
              </p>

              <motion.button
                onClick={open}
                whileTap={{ scale: 0.98 }}
                whileHover={{ scale: 1.02 }}
                className="px-[2vw] py-[0.8vw] cursor-pointer rounded-full bg-gradient-to-r from-purple-400 to-pink-400 text-white font-semibold hover:bg-gray-200 transition-colors text-[1vw]"
              >
                Get Aviator
              </motion.button>
            </div>
          </motion.div>

          {/* Картка 3 */}
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            className="relative flex-1 p-[2vw] mt-[2vw] border border-white/20 rounded-xl bg-white/10 backdrop-blur-md shadow-md hover:shadow-xl transition-all text-white overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-[0.3vw] bg-gradient-to-r from-yellow-400 to-orange-400" />

            <div className="flex flex-col h-full">
              <div className="mb-[1vw]">
                <PenLine className="w-[3vw] h-[3vw] text-yellow-300" />
              </div>

              <h3 className="text-[1.5vw] font-semibold mb-[1vw] text-white">
                Craft your CV
              </h3>

              <p className="text-[1vw] leading-relaxed">
                Craft the perfect cabin crew CV to help you reach your goal.
              </p>

              <p className="text-[2vw] font-bold text-yellow-300 mb-[1vw] mt-auto">
                $19.90
              </p>

              <motion.button
                onClick={open}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="text-[1vw] px-[2vw] py-[0.8vw] cursor-pointer rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 text-white font-semibold hover:bg-gray-200 transition-colors"
              >
                Get Coaching
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
