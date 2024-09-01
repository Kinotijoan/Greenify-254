"use client";
import { X } from "lucide-react";
import React, { useRef, useState, useEffect } from "react";

interface props{
  close: () => void;
}

const CaptureImage = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  useEffect(() => {
    startCamera();
  }, []);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true, // Use the rear camera
      });
      if (videoRef.current) {
        {
          facingMode: {
            exact: "environment";
          }
        }
        if (videoRef.current) {
          (videoRef.current as any).srcObject = stream;
        }
      }
    } catch (err) {
      console.error("Error accessing camera:", err);
    }
  };

  const captureImage = () => {
    const canvas = canvasRef.current;
    const video = videoRef.current;
    let imageData = null;
    if (canvas && video) {
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const context = canvas.getContext("2d");
      if (context) {
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        imageData = canvas.toDataURL("image/png");
      }
    }
    setImageSrc(imageData);
  };

  return (
    <div className=" absolute top-20 left-64 flex flex-col items-center">
      <X className="absolute top-0 right-0 bg-white"/>
      <video ref={videoRef} autoPlay playsInline width="640" height="480" />
      <button className="border-2 border-green-500 rounded-md mt-4 p-4 hover:bg-green-500" onClick={captureImage}>Capture Photo</button>
      <canvas ref={canvasRef} style={{ display: "none" }} />
      {imageSrc && <img src={imageSrc} alt="Captured" />}
    </div>
  );
};

export default CaptureImage;
