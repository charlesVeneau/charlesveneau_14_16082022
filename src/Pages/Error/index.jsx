import Illu from '../../assets/errorIllu.svg';

function Error() {
  return (
    <article className="sm:col-span-5 md:col-span-3 pt-4 pb-24 sm:p-0 sm:my-4 mx-4 md:mx-8 text-center">
      <img src={Illu} alt="error 404" />
      <h2 className="font-bold text-xl md:text-2xl text-center text-gray-900 mb-6">
        Page not found !
      </h2>
    </article>
  );
}

export default Error;
