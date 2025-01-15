const TitlePage = ({ title }: { title: string }) => {
  return (
    <div className="text-center font-semibold text-3xl text-foreground">
      {title}
    </div>
  );
};

export { TitlePage };
