import React, { useEffect, useRef, useState } from 'react';
import './preloader.css';

const Preloader: React.FC = () => {
  const textareaRef = useRef<HTMLDivElement>(null);
  const [i, setI] = useState(0);
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(1);
  const [outputText, setOutputText] = useState('');

  const speed = 50; // Writing speed in milliseconds
  const text = 'sh andrew_website.sh';

  const output = [
    'CPU0 microcode updated early to revision 0x1b, date = 2014-05-29',
    'LOADING.............',
    'Initializing cgroup subsys cpu',
    'Initializing cgroup subsys cpuacct',
    'Command line: BOOT_IMAGE=/vmlinuz-3.19.0-21-generic.efi.signed root=UUID=14ac372e-6980-4fe8-b247-fae92d54b0c5 ro quiet splash acpi_enforce_resources=lax intel_pstate=enable rcutree.rcu_idle_gp_delay=1 nouveau.runpm=0 vt.handoff=7',
    'KERNEL supported cpus:',
    '  Intel GenuineIntel',
    '  AMD AuthenticAMD',
    '  Centaur CentaurHauls',
    'lp: driver loaded but no devices found',
    'Initialising...',
  ];

  useEffect(() => {
    runner();
  }, []);

  useEffect(() => {
    if (i < output.length) {
      setOutputText((prev) => prev + `[    ${count / 1000}] ${output[i]}<br>`);
    }
  }, [i, count, outputText]);

  const runner = () => {
    if (textareaRef.current) {
      setOutputText((prev) => prev + text.charAt(i));
      setI(i + 1);
      setTimeout(() => {
        if (i < text.length) runner();
        else {
          setOutputText((prev) => prev + '<br>');
          setI(0);
          setTimeout(() => {
            feedbacker();
          }, 1000);
        }
      }, Math.floor(Math.random() * 220) + 50);
    }
  };

  const feedbacker = () => {
    if (textareaRef.current) {
      if (time % 2 === 0) {
        setI(i + 1);
        setOutputText((prev) => prev + `[    ${count / 1000}] ${output[i]}<br>`);
      }
      if (time === 3) {
        setI(i + 1);
        setOutputText((prev) => prev + `[    ${count / 1000}] ${output[i]}<br>`);
        setI(i + 1);
        setOutputText((prev) => prev + `[    ${count / 1000}] ${output[i]}<br>`);
        setI(i + 1);
        setOutputText((prev) => prev + `[    ${count / 1000}] ${output[i]}<br>`);
      }
      window.scrollTo(0, document.body.scrollHeight);
      setI(i + 1);
      setTime(Math.floor(Math.random() * 4) + 1);
      setCount(count + time);
      setTimeout(() => {
        if (i < output.length - 2) feedbacker();
        else {
          setOutputText((prev) => prev + '<br>Initialising...<br>');
          setTimeout(() => {
            if (textareaRef.current) {
              textareaRef.current.parentElement?.querySelector('.load')?.classList.add('fadeOut');
            }
          }, 500);
        }
      }, time);
    }
  };

  return (
    <div className="preloader">
      <div className="load">
        <div ref={textareaRef} className="term" dangerouslySetInnerHTML={{ __html: outputText }}></div>
      </div>
    </div>
  );
};

export default Preloader;
