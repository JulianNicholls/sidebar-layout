const ImageContainment = () => {
  return (
    <div className="container mx-auto">
      <div className="text-lg mb-6 p-6 bg-gray-500">
        This shows image containment. All of these images are much bigger than the{' '}
        <code className="bg-blue-500 px-2 py-1">div</code>s that they are contained in.
        <br />
        The landscape images are wider than they are tall (approximately 1.5:1), and the picture of
        the batteries is taller than it is wide (again 1.5:1, but in the opposite direction).
        <br />
        Using <code className="bg-blue-500 px-2 py-1">object-fit</code> is not sufficient. It has to
        be accompanied with the height and width to contain within.
        <br />
        Even relative sizes do not seem to work, specifying{' '}
        <code className="bg-blue-500 px-2 py1">h-5/6</code> does not work, Using{' '}
        <code className="bg-blue-500 px-2 py1">h-72</code> is fine.
      </div>

      <div className="grid w-[60rem] grid-cols-2 gap-4 justify-start">
        <div className="w-96 h-80 bg-blue-300 text-black">
          <div className="text-center">Contain</div>
          <img className="object-contain w-96 h-72" src="/images/arizona.jpg" alt="Arizona" />
        </div>

        <div className="w-96 h-80 bg-blue-300 text-black">
          <div className="text-center">Cover</div>
          <img className="object-cover w-96 h-72" src="/images/arizona.jpg" alt="Arizona" />
        </div>

        <div className="w-96 h-80 bg-green-300 text-black">
          <div className="text-center">Unconstrained</div>
          <img src="/images/bay-area.png" alt="Bay-Area" />
        </div>

        <div className="w-96 h-80 bg-green-300 text-black">
          <div className="text-center">Contain</div>

          <img className="object-contain w-96 h-72" src="/images/Batteries.png" alt="Batteries" />
        </div>
      </div>
    </div>
  );
};

export default ImageContainment;
