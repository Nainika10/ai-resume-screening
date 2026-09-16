import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { UploadCloud, FileText, X } from "lucide-react";
import EmptyState from "../components/EmptyState";

function formatSize(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function ResumeUpload() {
  const [files, setFiles] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploading, setUploading] = useState(false);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  const addFiles = (fileList) => {
    const newFiles = Array.from(fileList).map((f) => ({
      id: `${f.name}-${f.size}-${Date.now()}`,
      name: f.name,
      size: f.size,
    }));
    setFiles((prev) => [...prev, ...newFiles]);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    addFiles(e.dataTransfer.files);
  };

  const removeFile = (id) => setFiles((prev) => prev.filter((f) => f.id !== id));

  const handleProcess = () => {
    setUploading(true);
    setUploadProgress(0);
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          navigate("/processing");
          return 100;
        }
        return prev + 10;
      });
    }, 150);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Upload Resumes</h1>
        <p className="text-gray-500 text-sm mt-1">Upload candidate resumes to begin AI screening</p>
      </div>

      <div
        onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={handleDrop}
        onClick={() => inputRef.current.click()}
        className={`border-2 border-dashed rounded-xl p-10 text-center cursor-pointer transition-colors ${
          isDragging ? "border-indigo-400 bg-indigo-50" : "border-gray-200 bg-white hover:border-indigo-300"
        }`}
      >
        <input
          ref={inputRef} type="file" multiple accept=".pdf,.docx" className="hidden"
          onChange={(e) => addFiles(e.target.files)}
        />
        <div className="w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center mx-auto mb-3">
          <UploadCloud size={24} className="text-indigo-600" />
        </div>
        <p className="font-medium text-gray-700">Drag and drop resumes here, or click to browse</p>
        <p className="text-sm text-gray-400 mt-1">Supports multiple PDF and DOCX files</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
        <h2 className="font-semibold text-gray-800 mb-4">Uploaded Files ({files.length})</h2>
        {files.length === 0 ? (
          <EmptyState
            icon={FileText}
            title="No files uploaded yet"
            description="Drag and drop resumes above, or click the upload area to browse your files."
          />
        ) : (
          <div className="space-y-2">
            {files.map((file) => (
              <div key={file.id} className="flex items-center justify-between border border-gray-100 rounded-lg px-4 py-3">
                <div className="flex items-center gap-3">
                  <FileText size={18} className="text-indigo-500" />
                  <div>
                    <p className="text-sm font-medium text-gray-700">{file.name}</p>
                    <p className="text-xs text-gray-400">{formatSize(file.size)}</p>
                  </div>
                </div>
                <button onClick={() => removeFile(file.id)} className="text-gray-400 hover:text-red-500">
                  <X size={18} />
                </button>
              </div>
            ))}
          </div>
        )}

        {uploading && (
          <div className="mt-4">
            <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full bg-indigo-600 rounded-full transition-all" style={{ width: `${uploadProgress}%` }} />
            </div>
            <p className="text-xs text-gray-500 mt-1">{uploadProgress}% uploaded</p>
          </div>
        )}

        <button
          onClick={handleProcess}
          disabled={files.length === 0 || uploading}
          className="mt-5 w-full sm:w-auto px-6 py-2.5 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed"
        >
          {uploading ? "Processing..." : "Process Resumes"}
        </button>
      </div>
    </div>
  );
}

export default ResumeUpload;