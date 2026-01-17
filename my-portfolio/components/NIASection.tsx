import Image from "next/image";

export default function NIASection() {
  return (
    <div className="flex justify-center mt-32 pt-24 border-t border-[rgba(255,255,255,0.08)]">
      <div className="flex flex-col items-center gap-12 max-w-5xl">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <Image 
            src="/logo.png" 
            alt="NIA Logo" 
            width={224}
            height={224}
            className="w-40 h-40 md:w-56 md:h-56 flex-shrink-0"
            priority
          />
          <div className="flex flex-col gap-4">
            <h3 className="text-4xl md:text-6xl font-extrabold text-center md:text-left" style={{ color: '#d9d9d9' }}>
              Startup Founder
            </h3>
            <p className="text-lg md:text-2xl font-semibold text-center md:text-left" style={{ color: '#ff4f5f' }}>
              Network Intelligence Applied (NIA)
            </p>
          </div>
        </div>

        <p className="text-base md:text-lg leading-relaxed text-center max-w-3xl" style={{ color: '#c7c7c7' }}>
          NIA is an intelligent event discovery platform that leverages geolocation and AI to help users find nearby events and venues. Our mission is to transform how people discover local experiences through smart recommendations and real-time venue intelligence.
        </p>

        <div className="nia-image-container w-full">
          <Image 
            src="/dashboard.png" 
            alt="NIA Platform - Event Discovery Dashboard" 
            width={1920}
            height={1080}
            className="w-full h-auto"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg=="
            quality={90}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          <div className="feature-card">
            <h4 className="text-lg font-bold mb-2" style={{ color: '#ff4f5f' }}>Smart Discovery</h4>
            <p className="text-sm" style={{ color: '#a9a9a9' }}>AI-powered recommendations based on user preferences and location</p>
          </div>
          <div className="feature-card">
            <h4 className="text-lg font-bold mb-2" style={{ color: '#ff4f5f' }}>Geolocation</h4>
            <p className="text-sm" style={{ color: '#a9a9a9' }}>Real-time venue detection and proximity-based event suggestions</p>
          </div>
          <div className="feature-card">
            <h4 className="text-lg font-bold mb-2" style={{ color: '#ff4f5f' }}>Local Focus</h4>
            <p className="text-sm" style={{ color: '#a9a9a9' }}>Discover hidden gems and trending events in your neighborhood</p>
          </div>
        </div>
      </div>
    </div>
  );
}
