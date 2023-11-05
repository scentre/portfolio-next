export default function SectionHeading({ text }: { text: string }) {
  return (
    <div className="text-3xl font-medium capitalize mb-8 text-center">
      {text}
    </div>
  );
}
