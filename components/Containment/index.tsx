import Image from 'next/image';
import Arizona from '../..//public/images/arizona.jpg';
import BayArea from '../..//public/images/bay-area.png';
import Batteries from '../..//public/images/Batteries.png';

const ImageContainment = () => {
  return (
    <div className="container mx-auto">
      <div className="w-2/3 mx-auto mb-6 p-6 bg-sky-600 text-white">
        <p className="mb-4">
          This shows image containment. All of these images are much bigger than the{' '}
          <code className="bg-blue-800 text-white px-2 py-1">div</code>s that they are contained in.
        </p>

        <p className="mb-4">
          The landscape images are wider than they are tall (approximately 1.5:1), and the picture
          of the batteries is taller than it is wide (again 1.5:1, but in the opposite direction).
        </p>

        <p>
          Using <code className="bg-blue-800 text-white px-2 py-1">object-fit</code> on its own is
          not sufficient. The fit is not based on the parent container, it has to be accompanied
          with the height and width to contain within. Relative width and height do work, but still
          must be specified.
        </p>
      </div>

      <div className="grid grid-cols-2 w-[1200px] mx-auto gap-4 justify-start">
        <div className="flex flex-col gap-4 p-2 w-[550px] h-80 bg-blue-200 text-black">
          <div className="text-center">Contain</div>
          <Image
            className="object-contain w-[550px] h-5/6 relative border border-orange-500"
            src={Arizona}
            alt="Arizona"
          />
        </div>

        <div className="flex flex-col gap-4 p-2 w-[550px] h-80 bg-blue-200 text-black">
          <div className="text-center">Cover</div>
          <Image
            className="object-cover w-[550px] h-5/6 relative border border-orange-500"
            src={Arizona}
            alt="Arizona"
          />
        </div>

        <div className="flex flex-col gap-4 p-2 w-[550px] h-80 bg-blue-200 text-black">
          <div className="text-center">Unconstrained (and distorted)</div>
          <Image
            src={BayArea}
            className="w-full h-5/6 relative border border-orange-500"
            alt="Bay-Area"
          />
        </div>

        <div className="flex flex-col gap-4 p-2 w-[550px] h-80 bg-blue-200 text-black">
          <div className="text-center">Contain</div>
          <Image
            src={BayArea}
            className="object-contain w-[550px] h-5/6 relative border border-orange-500"
            alt="Bay-Area"
          />
        </div>

        <div className="flex flex-col gap-4 p-2 w-[550px] h-80 bg-blue-200 text-black">
          <div className="text-center">Contain</div>

          <Image
            className="object-contain w-[550px] h-5/6 relative border border-orange-500"
            src={Batteries}
            alt="Batteries"
          />
        </div>

        <div className="flex flex-col gap-4 p-2 w-[550px] h-80 bg-blue-200 text-black">
          <div className="text-center">Cover</div>

          <Image
            className="object-cover w-[550px] h-5/6 relative border border-orange-500"
            src={Batteries}
            alt="Batteries"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageContainment;
