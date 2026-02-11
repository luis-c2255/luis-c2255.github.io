interface CardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function Card({ icon, title, description }: CardProps) {
  return (
    <div className="rounded-2xl p-6 bg-gradient-to-br from-cyan-500/5 to-cyan-600/5 border border-cyan-500/20 backdrop-blur-md hover:border-cyan-500/40 transition-all hover:shadow-[0_0_30px_rgba(0,242,255,0.15)]">
      <div className="text-cyan-400 mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}
