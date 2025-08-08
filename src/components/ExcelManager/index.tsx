import React, { useState } from "react";
import {
  Upload,
  Download,
  FileSpreadsheet,
  Check,
  AlertCircle,
} from "lucide-react";

const ExcelManager = () => {
  const [file, setFile] = useState<File | null>(null);
  const [message, setMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [messageType, setMessageType] = useState<"success" | "error" | "">("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const uploaded = e.target.files?.[0];
    if (uploaded) {
      setFile(uploaded);
      setMessage("");
    }
  };

  const handleImport = async () => {
    if (!file) return;
    const formData = new FormData();
    formData.append("file", file);

    setIsLoading(true);
    setMessage("");
    try {
      const res = await fetch("http://localhost:8000/import-excel", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      setMessage(data.message || "Import thành công!");
      setMessageType("success");
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      setMessage("Lỗi khi import file!");
      setMessageType("error");
    } finally {
      setIsLoading(false);
    }
  };

  const handleExport = async () => {
    setIsLoading(true);
    setMessage("");
    try {
      const res = await fetch("http://localhost:8000/export-excel");
      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "export.xlsx";
      a.click();
      setMessage("Đã xuất file thành công!");
      setMessageType("success");
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      setMessage("Lỗi khi export file!");
      setMessageType("error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-gray-30 via-white-100 to-cyan-50 p-10 rounded-2xl">
      <div className="w-full pt-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-100 to-blue-100 rounded-2xl mb-4 shadow-lg">
            <FileSpreadsheet className="w-8 h-8 text-white-100" />
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-100 to-gray-50 bg-clip-text text-transparent mb-2">
            Quản lý Excel
          </h1>
          <p className="text-gray-100">
            Import và Export file Excel một cách dễ dàng
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-white-100/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-white-100/20 p-8 transition-all duration-300 hover:shadow-3xl">
          {/* File Upload Section */}
          <div className="mb-8">
            <label className="block text-sm font-semibold text-gray-100 mb-3">
              Chọn file Excel để import
            </label>

            <div className="relative">
              <input
                type="file"
                accept=".xlsx,.xls"
                onChange={handleFileChange}
                className="absolute inset-0 w-full h-full cursor-pointer "
                id="fileInput"
              />
              <label
                htmlFor="fileInput"
                className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-100 rounded-2xl cursor-pointer bg-gradient-to-br from-gray-50 to-gray-100 hover:from-blue-50 hover:to-black-50 hover:border-blue-400 transition-all duration-300 group"
              >
                <Upload className="w-8 h-8 text-gray-50 group-hover:text-blue-100 transition-colors duration-300 mb-2" />
                <span className="text-sm font-medium text-black-100 group-hover:text-blue-100 transition-colors duration-300">
                  {file ? file.name : "Kéo thả file hoặc click để chọn"}
                </span>
                <span className="text-xs text-black-50 mt-1">
                  Hỗ trợ file .xlsx, .xls
                </span>
              </label>
            </div>

            {file && (
              <div className="mt-3 flex items-center text-sm text-white-100 bg-blue-25 rounded-lg p-3 animate-in slide-in-from-top duration-300">
                <Check className="w-4 h-4 mr-2" />
                File đã chọn: {file.name}
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <button
              onClick={handleImport}
              disabled={!file || isLoading}
              className="group relative overflow-hidden bg-gradient-to-r from-primary-red to-blue-25 hover:from-primary-red hover:to-blue-100 text-white-100 font-semibold py-4 px-6 rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl disabled:hover:shadow-lg"
            >
              <div className="absolute inset-0 bg-white-100 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <div className="flex items-center justify-center relative z-10">
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-white/30 border-t-white-100 mr-3"></div>
                    Đang import...
                  </>
                ) : (
                  <>
                    <Upload className="w-5 h-5 mr-3" />
                    Import Excel
                  </>
                )}
              </div>
            </button>

            <button
              onClick={handleExport}
              disabled={isLoading}
              className="group relative overflow-hidden bg-gradient-to-r from-primary-red to-blue-25 hover:from-primary-red hover:to-blue-100 text-white-100 font-semibold py-4 px-6 rounded-xl transition-all duration-300 disabled:opacity-90 disabled:cursor-not-allowed shadow-lg hover:shadow-xl disabled:hover:shadow-lg"
            >
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <div className="flex items-center justify-center relative z-10">
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-white/30 border-t-white-100 mr-3"></div>
                    Đang export...
                  </>
                ) : (
                  <>
                    <Download className="w-5 h-5 mr-3" />
                    Export Excel
                  </>
                )}
              </div>
            </button>
          </div>

          {/* Message Display */}
          {message && (
            <div
              className={`animate-in slide-in-from-bottom duration-500 p-4 rounded-xl border ${
                messageType === "success"
                  ? "bg-blue-25 border-white-100 text-white-100"
                  : "bg-primary-red border-primary-red text-blue-100"
              }`}
            >
              <div className="flex items-center">
                {messageType === "success" ? (
                  <Check className="w-5 h-5 mr-3 text-green-100" />
                ) : (
                  <AlertCircle className="w-5 h-5 mr-3 text-primary-red" />
                )}
                <span className="font-medium">{message}</span>
              </div>
            </div>
          )}
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="text-center p-6 bg-white-100/90 backdrop-blur rounded-2xl border border-white-100">
            <div className="w-12 h-12 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Upload className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-black-100 mb-2">Import Nhanh</h3>
            <p className="text-sm text-gray-100">
              Upload và xử lý file Excel một cách nhanh chóng
            </p>
          </div>

          <div className="text-center p-6 bg-white-100/90 backdrop-blur rounded-2xl border border-white-100">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Download className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-black-100 mb-2">Export Dễ Dàng</h3>
            <p className="text-sm text-gray-100">
              Xuất dữ liệu ra file Excel với một click
            </p>
          </div>

          <div className="text-center p-6 bg-white-100/90 backdrop-blur rounded-2xl border border-white-100">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <FileSpreadsheet className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-black-100 mb-2">Đa Định Dạng</h3>
            <p className="text-sm text-gray-100">
              Hỗ trợ nhiều định dạng file Excel khác nhau
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExcelManager;
