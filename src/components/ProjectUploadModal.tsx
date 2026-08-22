import React, { useState, useRef } from 'react';
import { 
  X, 
  Upload, 
  Plus, 
  Trash2, 
  FileCode, 
  FileText, 
  FileSpreadsheet, 
  FileArchive, 
  Globe, 
  Github, 
  Check, 
  AlertCircle,
  File,
  Code2,
  ShieldAlert,
  FileCheck2,
  Scissors,
  Cpu,
  Layers,
  Sparkles
} from 'lucide-react';
import { Project, ProjectAttachment } from '../types';
import { seaMistStyles as s } from '../utils/themeStyles';
import { formatFileSize, readFileAsDataUrl } from '../utils/projectStorage';

interface ProjectUploadModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (project: Project) => void;
  initialProject?: Project | null;
}

const COMMON_TAGS = [
  'PHP', 'CodeIgniter 4', 'MySQL', 'JavaScript', 'TypeScript', 
  'React', 'Tailwind CSS', 'HTML5', 'CSS3', 'Excel VBA', 
  'LaTeX', 'Python', 'REST API', 'IoT', 'Bootstrap'
];

const AVAILABLE_ICONS = [
  { name: 'Code2', label: 'Code' },
  { name: 'ShieldAlert', label: 'Shield' },
  { name: 'FileCheck2', label: 'Verified' },
  { name: 'Scissors', label: 'Service' },
  { name: 'Cpu', label: 'Hardware/IoT' },
  { name: 'FileSpreadsheet', label: 'Excel/VBA' },
  { name: 'FileCode', label: 'Document/TeX' },
  { name: 'Globe', label: 'Web App' }
];

export const ProjectUploadModal: React.FC<ProjectUploadModalProps> = ({
  isOpen,
  onClose,
  onSave,
  initialProject
}) => {
  const [title, setTitle] = useState(initialProject?.title || '');
  const [category, setCategory] = useState(initialProject?.category || 'web');
  const [status, setStatus] = useState<'completed' | 'in-progress' | 'live' | 'archived'>(
    initialProject?.status || 'completed'
  );
  const [description, setDescription] = useState(initialProject?.description || '');
  const [longDescription, setLongDescription] = useState(initialProject?.longDescription || '');
  const [githubUrl, setGithubUrl] = useState(initialProject?.githubUrl || '');
  const [liveDemoUrl, setLiveDemoUrl] = useState(initialProject?.liveDemoUrl || '');
  const [iconName, setIconName] = useState(initialProject?.iconName || 'Code2');
  
  const [techStack, setTechStack] = useState<string[]>(initialProject?.techStack || ['PHP', 'JavaScript']);
  const [newTechInput, setNewTechInput] = useState('');
  
  const [keyFeatures, setKeyFeatures] = useState<string[]>(
    initialProject?.keyFeatures && initialProject.keyFeatures.length > 0 
      ? initialProject.keyFeatures 
      : ['Responsive user interface', 'Secure backend architecture']
  );
  const [newFeatureInput, setNewFeatureInput] = useState('');

  const [attachments, setAttachments] = useState<ProjectAttachment[]>(
    initialProject?.attachments || []
  );
  const [isDragging, setIsDragging] = useState(false);
  const [isUploadingFiles, setIsUploadingFiles] = useState(false);
  const [validationError, setValidationError] = useState('');
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const handleAddTech = (tagToAdd?: string) => {
    const tag = (tagToAdd || newTechInput).trim();
    if (tag && !techStack.includes(tag)) {
      setTechStack([...techStack, tag]);
      if (!tagToAdd) setNewTechInput('');
    }
  };

  const handleRemoveTech = (tagToRemove: string) => {
    setTechStack(techStack.filter(t => t !== tagToRemove));
  };

  const handleAddFeature = () => {
    if (newFeatureInput.trim()) {
      setKeyFeatures([...keyFeatures, newFeatureInput.trim()]);
      setNewFeatureInput('');
    }
  };

  const handleRemoveFeature = (index: number) => {
    setKeyFeatures(keyFeatures.filter((_, i) => i !== index));
  };

  const processUploadedFiles = async (files: FileList | null) => {
    if (!files || files.length === 0) return;
    
    setIsUploadingFiles(true);
    const newAttachments: ProjectAttachment[] = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      try {
        let dataUrl = '';
        // If file is reasonably sized (< 10MB), read as data URL for persistence & client download
        if (file.size < 10 * 1024 * 1024) {
          dataUrl = await readFileAsDataUrl(file);
        }

        newAttachments.push({
          id: `att-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`,
          name: file.name,
          size: file.size,
          type: file.type || file.name.split('.').pop() || 'application/octet-stream',
          uploadedAt: new Date().toISOString().split('T')[0],
          dataUrl: dataUrl,
          isSample: false
        });
      } catch (err) {
        console.error('Failed to read file:', file.name, err);
      }
    }

    setAttachments(prev => [...prev, ...newAttachments]);
    setIsUploadingFiles(false);
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    processUploadedFiles(e.target.files);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    processUploadedFiles(e.dataTransfer.files);
  };

  const handleRemoveAttachment = (id: string) => {
    setAttachments(attachments.filter(a => a.id !== id));
  };

  const getFileIcon = (fileName: string, type: string) => {
    const ext = fileName.split('.').pop()?.toLowerCase();
    if (ext === 'zip' || ext === 'rar' || ext === 'tar' || ext === 'gz' || ext === '7z') {
      return <FileArchive className="w-5 h-5 text-[#C98B80]" />;
    }
    if (ext === 'pdf' || ext === 'doc' || ext === 'docx') {
      return <FileText className="w-5 h-5 text-[#5B7B75]" />;
    }
    if (ext === 'xls' || ext === 'xlsx' || ext === 'csv') {
      return <FileSpreadsheet className="w-5 h-5 text-[#2D7D6F]" />;
    }
    if (['php', 'js', 'ts', 'jsx', 'tsx', 'html', 'css', 'py', 'sql', 'json', 'tex'].includes(ext || '')) {
      return <FileCode className="w-5 h-5 text-[#C98B80]" />;
    }
    return <File className="w-5 h-5 text-[#798E8A]" />;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) {
      setValidationError('Please provide a project title.');
      return;
    }
    if (!description.trim()) {
      setValidationError('Please provide a brief project description.');
      return;
    }

    const projectData: Project = {
      id: initialProject?.id || `proj-${Date.now()}`,
      title: title.trim(),
      repoName: githubUrl ? githubUrl.split('/').pop() || title.toLowerCase().replace(/\s+/g, '-') : undefined,
      description: description.trim(),
      longDescription: longDescription.trim() || description.trim(),
      techStack: techStack.length > 0 ? techStack : ['Web Development'],
      category: category,
      githubUrl: githubUrl.trim() || undefined,
      liveDemoUrl: liveDemoUrl.trim() || undefined,
      status: status,
      stars: initialProject?.stars || 0,
      featured: initialProject?.featured !== undefined ? initialProject.featured : true,
      keyFeatures: keyFeatures.filter(f => f.trim().length > 0),
      updatedAt: new Date().toISOString().split('T')[0],
      iconName: iconName,
      attachments: attachments,
      isUserUploaded: true
    };

    onSave(projectData);
    onClose();
  };

  return (
    <div 
      id="project-upload-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#1F2E2B]/60 backdrop-blur-xs animate-in fade-in duration-200 overflow-y-auto"
    >
      <div 
        id="project-upload-modal-card"
        className={`relative w-full max-w-3xl my-8 rounded-3xl border shadow-2xl p-6 sm:p-8 ${s.cardBg} ${s.border} max-h-[90vh] overflow-y-auto`}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-5 border-b border-[#D5DDD9] mb-6">
          <div className="flex items-center gap-3">
            <div className={`p-2.5 rounded-2xl border ${s.subCardBg}`}>
              <Upload className="w-5 h-5 text-[#C98B80]" />
            </div>
            <div>
              <h3 className={`text-xl font-bold ${s.text}`}>
                {initialProject ? 'Edit Project & Uploads' : 'Upload & Add New Project'}
              </h3>
              <p className={`text-xs ${s.textMuted}`}>
                Add web applications, project source archives, documentation, or macro files
              </p>
            </div>
          </div>
          <button
            id="close-upload-modal-btn"
            onClick={onClose}
            className={`p-2 rounded-xl border hover:bg-[#EFF2F1] text-[#4E635F] transition-colors`}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Validation error */}
        {validationError && (
          <div className="mb-6 p-3 rounded-xl border border-red-200 bg-red-50 text-red-700 text-xs flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{validationError}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Main Info Row */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className={`block text-xs font-bold uppercase tracking-wider mb-1.5 ${s.textSubtle}`}>
                Project Title <span className="text-[#C98B80]">*</span>
              </label>
              <input
                id="upload-project-title-input"
                type="text"
                value={title}
                onChange={(e) => { setTitle(e.target.value); setValidationError(''); }}
                placeholder="e.g. Disaster Risk Reduction System"
                className={`w-full px-3.5 py-2.5 rounded-xl border text-sm focus:outline-none transition-all ${s.inputBg}`}
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className={`block text-xs font-bold uppercase tracking-wider mb-1.5 ${s.textSubtle}`}>
                  Category
                </label>
                <select
                  id="upload-project-category-select"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className={`w-full px-3 py-2.5 rounded-xl border text-xs sm:text-sm focus:outline-none transition-all ${s.inputBg}`}
                >
                  <option value="web">Web Application</option>
                  <option value="automation">Automation &amp; Script</option>
                  <option value="iot">IoT &amp; Hardware</option>
                  <option value="document">Documentation / TeX</option>
                  <option value="other">Other System</option>
                </select>
              </div>

              <div>
                <label className={`block text-xs font-bold uppercase tracking-wider mb-1.5 ${s.textSubtle}`}>
                  Status
                </label>
                <select
                  id="upload-project-status-select"
                  value={status}
                  onChange={(e) => setStatus(e.target.value as any)}
                  className={`w-full px-3 py-2.5 rounded-xl border text-xs sm:text-sm focus:outline-none transition-all ${s.inputBg}`}
                >
                  <option value="completed">Completed</option>
                  <option value="live">Live / Deployed</option>
                  <option value="in-progress">In Progress</option>
                  <option value="archived">Archived</option>
                </select>
              </div>
            </div>
          </div>

          {/* Short Description */}
          <div>
            <label className={`block text-xs font-bold uppercase tracking-wider mb-1.5 ${s.textSubtle}`}>
              Short Summary Description <span className="text-[#C98B80]">*</span>
            </label>
            <input
              id="upload-project-desc-input"
              type="text"
              value={description}
              onChange={(e) => { setDescription(e.target.value); setValidationError(''); }}
              placeholder="e.g. Web-based disaster response and municipal emergency management platform built with PHP."
              className={`w-full px-3.5 py-2.5 rounded-xl border text-sm focus:outline-none transition-all ${s.inputBg}`}
              required
            />
          </div>

          {/* Long Description / Overview */}
          <div>
            <label className={`block text-xs font-bold uppercase tracking-wider mb-1.5 ${s.textSubtle}`}>
              Detailed Architecture &amp; System Overview
            </label>
            <textarea
              id="upload-project-longdesc-input"
              rows={3}
              value={longDescription}
              onChange={(e) => setLongDescription(e.target.value)}
              placeholder="Provide more detail on how the web application or project works, modules implemented, database architecture, or operational workflows..."
              className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm focus:outline-none transition-all ${s.inputBg}`}
            />
          </div>

          {/* Links Row */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className={`block text-xs font-bold uppercase tracking-wider mb-1.5 ${s.textSubtle}`}>
                GitHub Repository URL
              </label>
              <div className="relative">
                <Github className="w-4 h-4 absolute left-3 top-3 text-[#798E8A]" />
                <input
                  id="upload-project-github-input"
                  type="url"
                  value={githubUrl}
                  onChange={(e) => setGithubUrl(e.target.value)}
                  placeholder="https://github.com/shane136/your-repo"
                  className={`w-full pl-9 pr-3.5 py-2.5 rounded-xl border text-xs sm:text-sm focus:outline-none transition-all ${s.inputBg}`}
                />
              </div>
            </div>

            <div>
              <label className={`block text-xs font-bold uppercase tracking-wider mb-1.5 ${s.textSubtle}`}>
                Live Demo / Web URL
              </label>
              <div className="relative">
                <Globe className="w-4 h-4 absolute left-3 top-3 text-[#798E8A]" />
                <input
                  id="upload-project-demo-input"
                  type="url"
                  value={liveDemoUrl}
                  onChange={(e) => setLiveDemoUrl(e.target.value)}
                  placeholder="https://my-app-preview.example.com"
                  className={`w-full pl-9 pr-3.5 py-2.5 rounded-xl border text-xs sm:text-sm focus:outline-none transition-all ${s.inputBg}`}
                />
              </div>
            </div>
          </div>

          {/* Tech Stack Picker */}
          <div>
            <label className={`block text-xs font-bold uppercase tracking-wider mb-1.5 ${s.textSubtle}`}>
              Tech Stack &amp; Tools
            </label>
            <div className="flex flex-wrap gap-1.5 mb-2">
              {techStack.map((tech) => (
                <span 
                  key={tech}
                  className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium border ${s.subCardBg} ${s.text}`}
                >
                  {tech}
                  <button 
                    type="button" 
                    onClick={() => handleRemoveTech(tech)}
                    className="hover:text-red-500 transition-colors ml-0.5"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              ))}
            </div>
            
            <div className="flex gap-2 mb-2">
              <input
                id="upload-project-new-tech-input"
                type="text"
                value={newTechInput}
                onChange={(e) => setNewTechInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    handleAddTech();
                  }
                }}
                placeholder="Type technology (e.g. CodeIgniter 4, MySQL) & press Enter"
                className={`flex-1 px-3 py-1.5 rounded-xl border text-xs focus:outline-none ${s.inputBg}`}
              />
              <button
                type="button"
                onClick={() => handleAddTech()}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold border ${s.btnSecondary}`}
              >
                Add Tag
              </button>
            </div>

            {/* Quick tag suggestions */}
            <div className="flex flex-wrap items-center gap-1 text-[11px]">
              <span className={s.textSubtle}>Quick Suggestions:</span>
              {COMMON_TAGS.filter(t => !techStack.includes(t)).slice(0, 7).map(tag => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => handleAddTech(tag)}
                  className={`px-2 py-0.5 rounded-md border text-[11px] hover:border-[#C98B80] transition-colors ${s.badgeBg}`}
                >
                  + {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Key Features */}
          <div>
            <label className={`block text-xs font-bold uppercase tracking-wider mb-1.5 ${s.textSubtle}`}>
              Key Features &amp; Capabilities
            </label>
            <div className="space-y-1.5 mb-2">
              {keyFeatures.map((feat, index) => (
                <div key={index} className={`flex items-center justify-between gap-2 p-2 rounded-xl border text-xs ${s.subCardBg}`}>
                  <span className={`flex-1 ${s.text}`}>{feat}</span>
                  <button
                    type="button"
                    onClick={() => handleRemoveFeature(index)}
                    className="text-[#798E8A] hover:text-red-500 transition-colors p-1"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>

            <div className="flex gap-2">
              <input
                id="upload-project-new-feature-input"
                type="text"
                value={newFeatureInput}
                onChange={(e) => setNewFeatureInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    handleAddFeature();
                  }
                }}
                placeholder="Add a key feature / module and press Add"
                className={`flex-1 px-3 py-1.5 rounded-xl border text-xs focus:outline-none ${s.inputBg}`}
              />
              <button
                type="button"
                onClick={handleAddFeature}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold border ${s.btnSecondary}`}
              >
                Add Feature
              </button>
            </div>
          </div>

          {/* File Upload Zone */}
          <div className="space-y-3 pt-2">
            <div className="flex items-center justify-between">
              <label className={`block text-xs font-bold uppercase tracking-wider ${s.textSubtle}`}>
                Project Files, Archives &amp; Documentation
              </label>
              <span className={`text-[11px] ${s.textMuted}`}>
                {attachments.length} {attachments.length === 1 ? 'file' : 'files'} attached
              </span>
            </div>

            {/* Drag and drop box */}
            <div
              onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
              onDragLeave={() => setIsDragging(false)}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
              className={`p-6 border-2 border-dashed rounded-2xl text-center cursor-pointer transition-all ${
                isDragging 
                  ? 'border-[#C98B80] bg-[#F9EFEF]/50' 
                  : `border-[#D5DDD9] hover:border-[#5B7B75] hover:bg-[#EFF2F1]/50`
              }`}
            >
              <input
                ref={fileInputRef}
                type="file"
                multiple
                onChange={handleFileInputChange}
                className="hidden"
              />
              <div className="flex flex-col items-center justify-center gap-2">
                <div className={`p-3 rounded-full border ${s.subCardBg}`}>
                  <Upload className="w-5 h-5 text-[#C98B80]" />
                </div>
                <p className={`text-xs font-bold ${s.text}`}>
                  {isUploadingFiles ? 'Processing files...' : 'Click to browse or drag & drop files here'}
                </p>
                <p className={`text-[11px] ${s.textSubtle}`}>
                  Supports ZIP archives, PHP, JS, SQL, PDF, DOCX, TXT, Excel spreadsheets, LaTeX documents, and images
                </p>
              </div>
            </div>

            {/* Attached file list */}
            {attachments.length > 0 && (
              <div className="space-y-2 mt-3">
                {attachments.map((att) => (
                  <div 
                    key={att.id}
                    className={`flex items-center justify-between gap-3 p-3 rounded-xl border ${s.subCardBg}`}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      {getFileIcon(att.name, att.type)}
                      <div className="min-w-0">
                        <p className={`text-xs font-bold truncate ${s.text}`}>{att.name}</p>
                        <p className={`text-[10px] ${s.textSubtle}`}>
                          {formatFileSize(att.size)} • Uploaded {att.uploadedAt}
                        </p>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleRemoveAttachment(att.id)}
                      className="p-1.5 rounded-lg text-[#798E8A] hover:text-red-600 hover:bg-red-50 transition-colors"
                      title="Remove file"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Modal Action Buttons */}
          <div className="flex items-center justify-end gap-3 pt-6 border-t border-[#D5DDD9]">
            <button
              type="button"
              id="cancel-upload-project-btn"
              onClick={onClose}
              className={`px-5 py-2.5 rounded-xl text-xs font-semibold border ${s.btnSecondary}`}
            >
              Cancel
            </button>

            <button
              type="submit"
              id="submit-upload-project-btn"
              className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-bold ${s.btnPrimary}`}
            >
              <Check className="w-4 h-4" />
              <span>{initialProject ? 'Save Changes' : 'Save & Publish Project'}</span>
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};
