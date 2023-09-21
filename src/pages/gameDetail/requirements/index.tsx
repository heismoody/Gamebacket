export default function RequirementList() {
  return (
    <div className="flex flex-col gap-y-3 py-5">
      <span className="introheading-2 text-xl">System requirements for PC</span>
      <span className="introheading-2 text-base">Minimum:</span>
      <ul className="descr-1 text-xs list-inside list-disc">
        <li>Requires a 64-bit processor and operating system</li>
        <li>OS: Windows® 10 64 Bit (latest update)</li>
        <li>
          Processor: Intel® Core™ i3-6100 / Core™ i5-2500K or AMD Ryzen™ 3 1200
        </li>
        <li>Memory: 8 GB RAM</li>
        <li>DirectX: Version 12</li>
        <li>Storage: 125 GB available space</li>
      </ul>
      <span className="introheading-2 text-base">Recommended:</span>
      <ul className="descr-1 text-xs list-inside list-disc">
        <li>Requires a 64-bit processor and operating system</li>
        <li>OS: Windows® 10 64 Bit (latest update)</li>
        <li>
          Processor: Intel® Core™ i3-6100 / Core™ i5-2500K or AMD Ryzen™ 3 1200
        </li>
        <li>Memory: 8 GB RAM</li>
        <li>DirectX: Version 12</li>
        <li>Storage: 125 GB available space</li>
      </ul>
      <span className="introheading-2 text-xl">
        System requirements for PlayStation 5
      </span>
      <span className="introheading-2 text-xl">
        System requirements for Xbox One
      </span>
      <span className="introheading-2 text-xl">
        System requirements for Xbox Series S/X
      </span>
    </div>
  );
}
