import Accordion from "@/components/Accordion";

export default function Home() {
  return (
    <div className="flex w-full h-screen justify-center items-center">
      <Accordion title="소개">
        <p>안녕하세요. 해커맨 입니다.</p>
      </Accordion>
    </div>
  );
}
