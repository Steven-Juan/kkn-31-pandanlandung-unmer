interface TitleProps {
  title: string;
  desc: string;
}

const Title = ({ title, desc }: TitleProps) => {
  return (
    <div className="text-center space-y-6">
      <h2 className="text-primary dark:text-text-invert text-3xl sm:text-4xl md:text-5xl font-semibold">
        {title}
      </h2>

      <p className="text-primary dark:text-text-invert text-sm sm:text-base md:text-lg max-w-6xl mx-auto leading-relaxed">
        {desc}
      </p>
    </div>
  );
};

export default Title;
