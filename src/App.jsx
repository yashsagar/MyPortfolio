function App() {
  const handleDownload = () => {
    const aTag = document.createElement("a");
    aTag.href = "/resume.pdf";
    aTag.setAttribute("download", "resume.pdf");
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };

  return (
    <div className="main-wrapper font-JetBrains gap-4 items-center sm:flex sm:mt-16 lg:mt-36 ">
      <div className="basis-1/3 rounded-full overflow-hidden mb-20 sm:mb-0 sm:-mt-20 sm:basis-1/2 sm:order-2 lg:-ml-28 lg:basis-1/3 xl:-ml-48">
        <img
          src="/images/portfolio-bg-removed.png"
          alt="portfolio image"
          className="w-full h-full"
        ></img>
      </div>
      <div className="basis-2/3 pb-20 sm:basis-1/2 sm:mb-0 ml-[10%] lg:basis-2/3">
        <p className="text-xs mb-2 sm:leading-none">Full Stack Developer</p>
        <p className="text-3xl sm:text-[40px] lg:text-[60px] leading-tight">
          Hello I'm
        </p>
        <p className="text-6xl text-accent leading-tight">Yashwanth Sagar J</p>
        <div className="flex items-center gap-4 text-accent-btn">
          <button
            onClick={handleDownload}
            className="text-accent-btn rounded-full border-2 border-accent-btn px-4 py-2 mt-4 flex items-center gap-2 cursor-pointer"
          >
            DOWNLOAD CV
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentcolor"
                d="m12 16l-5-5l1.4-1.45l2.6 2.6V4h2v8.15l2.6-2.6L17 11zm-6 4q-.825 0-1.412-.587T4 18v-3h2v3h12v-3h2v3q0 .825-.587 1.413T18 20z"
              />
            </svg>
          </button>
          <div className="w-7 h-7 mt-4 rounded-full border-2 border-accent-btn cursor-pointer flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60%"
              height="60%"
              viewBox="-10 -20 256 256"
            >
              <path
                fill="currentColor"
                d="M216 104v8a56.06 56.06 0 0 1-48.44 55.47A39.8 39.8 0 0 1 176 192v40a8 8 0 0 1-8 8h-64a8 8 0 0 1-8-8v-16H72a40 40 0 0 1-40-40a24 24 0 0 0-24-24a8 8 0 0 1 0-16a40 40 0 0 1 40 40a24 24 0 0 0 24 24h24v-8a39.8 39.8 0 0 1 8.44-24.53A56.06 56.06 0 0 1 56 112v-8a58.14 58.14 0 0 1 7.69-28.32A59.78 59.78 0 0 1 69.07 28A8 8 0 0 1 76 24a59.75 59.75 0 0 1 48 24h24a59.75 59.75 0 0 1 48-24a8 8 0 0 1 6.93 4a59.74 59.74 0 0 1 5.37 47.68A58 58 0 0 1 216 104"
              />
            </svg>
          </div>
          <div className="w-7 h-7 p-1.5 mt-4 rounded-full border-2 border-accent-btn cursor-pointer">
            <svg
              className=""
              xmlns="http://www.w3.org/2000/svg"
              width="90%"
              height="90%"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentcolor"
                d="M5.706 7.798V24H.311V7.798zm.343-5.002l.002.098c0 .749-.318 1.423-.826 1.895l-.002.001A3.07 3.07 0 0 1 3 5.59h.007h-.033a2.95 2.95 0 0 1-2.162-.801l.001.001a2.67 2.67 0 0 1-.815-1.998v.004l-.001-.069c0-.762.324-1.448.841-1.929L.84.797A3.07 3.07 0 0 1 3.045.001h-.006a2.98 2.98 0 0 1 2.177.795L5.214.794a2.72 2.72 0 0 1 .835 1.964V2.8v-.002zm19.062 11.92V24h-5.378v-8.665a4.7 4.7 0 0 0-.675-2.71l.012.021a2.33 2.33 0 0 0-2.076-.972h.008a2.63 2.63 0 0 0-1.73.568l.006-.004a3.5 3.5 0 0 0-1.032 1.375l-.008.023a3.9 3.9 0 0 0-.179 1.331v-.007v9.042H8.681q.033-6.523.033-10.578t-.016-4.839L8.682 7.8h5.378v2.354h-.033c.214-.345.435-.644.678-.924l-.008.009q.421-.463.908-.838l.016-.012a4.2 4.2 0 0 1 1.392-.704l.03-.007a6.4 6.4 0 0 1 1.797-.254h.079h-.004a5.8 5.8 0 0 1 4.493 1.851l.003.004q1.702 1.856 1.702 5.436z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
