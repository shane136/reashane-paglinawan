import React, { useState } from 'react';
import { 
  X, 
  FileSpreadsheet, 
  Search, 
  Printer, 
  RefreshCw, 
  CheckCircle2, 
  Users, 
  FileText, 
  UserCheck, 
  Sparkles,
  Info,
  ShieldCheck
} from 'lucide-react';
import { Project } from '../types';

interface Resident {
  id: number;
  lastName: string;
  firstName: string;
  middleName: string;
  religion: string;
  age: number;
  sex: 'Male' | 'Female';
  maritalStatus: 'Single' | 'Married' | 'Widowed' | 'Divorced';
  contact: string;
  voterStatus: 'Registered' | 'Non-Registered';
}

const INITIAL_RESIDENTS: Resident[] = [
  { id: 1, lastName: 'CURRY', firstName: 'STEPHEN', middleName: 'CHICKEN', religion: 'Christian', age: 32, sex: 'Male', maritalStatus: 'Married', contact: '09123456781', voterStatus: 'Registered' },
  { id: 2, lastName: 'WIGGINS', firstName: 'ANDREW', middleName: 'THOMPSON', religion: 'Christian', age: 34, sex: 'Male', maritalStatus: 'Single', contact: '09223456782', voterStatus: 'Registered' },
  { id: 3, lastName: 'MERCER', firstName: 'RHEA', middleName: 'KYLAN', religion: 'Catholic', age: 25, sex: 'Female', maritalStatus: 'Single', contact: '09323456783', voterStatus: 'Registered' },
  { id: 4, lastName: 'GALLAGHER', firstName: 'ZARA', middleName: 'JUNIPER', religion: 'Catholic', age: 65, sex: 'Female', maritalStatus: 'Widowed', contact: '09423456784', voterStatus: 'Registered' },
  { id: 5, lastName: 'ABDUL JABBAR', firstName: 'HASSAN', middleName: 'ALIBASHIR', religion: 'Islam', age: 47, sex: 'Male', maritalStatus: 'Married', contact: '09523456785', voterStatus: 'Registered' },
  { id: 6, lastName: 'DFGFDG', firstName: 'FGDFG', middleName: 'FGDFG', religion: 'Christian', age: 55, sex: 'Male', maritalStatus: 'Single', contact: '09623456786', voterStatus: 'Non-Registered' },
  { id: 7, lastName: 'DFD', firstName: 'DFDF', middleName: 'DFDF', religion: 'Catholic', age: 23, sex: 'Female', maritalStatus: 'Single', contact: '09723456787', voterStatus: 'Registered' },
  { id: 8, lastName: 'SHANE', firstName: 'JANE', middleName: 'LEAH', religion: 'Catholic', age: 28, sex: 'Female', maritalStatus: 'Single', contact: '09823456788', voterStatus: 'Registered' },
  { id: 9, lastName: 'JO', firstName: 'SHHHH', middleName: 'LLLLL', religion: 'Christian', age: 56, sex: 'Male', maritalStatus: 'Married', contact: '09923456789', voterStatus: 'Registered' },
  { id: 10, lastName: 'PAGLINAWAN', firstName: 'REASHANE', middleName: 'ANDALES', religion: 'Catholic', age: 26, sex: 'Female', maritalStatus: 'Single', contact: '09171234560', voterStatus: 'Registered' }
];

interface PurokVbaModalProps {
  isOpen: boolean;
  onClose: () => void;
  project?: Project;
}

export const PurokVbaModal: React.FC<PurokVbaModalProps> = ({ isOpen, onClose, project }) => {
  const [activeTab, setActiveTab] = useState<'HOME' | 'LIST'>('HOME');
  const [residents, setResidents] = useState<Resident[]>(INITIAL_RESIDENTS);
  const [printedCount, setPrintedCount] = useState<number>(36);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedResidentId, setSelectedResidentId] = useState<number>(10);
  const [showClearanceModal, setShowClearanceModal] = useState<boolean>(false);
  const [clearanceResident, setClearanceResident] = useState<Resident | null>(INITIAL_RESIDENTS[9]);
  const [notification, setNotification] = useState<string>('');

  // Add resident form state
  const [newResident, setNewResident] = useState<{
    lastName: string;
    firstName: string;
    middleName: string;
    religion: string;
    age: string;
    sex: 'Male' | 'Female';
    maritalStatus: 'Single' | 'Married' | 'Widowed' | 'Divorced';
    contact: string;
    voterStatus: 'Registered' | 'Non-Registered';
  }>({
    lastName: '',
    firstName: '',
    middleName: '',
    religion: '',
    age: '',
    sex: 'Male',
    maritalStatus: 'Single',
    contact: '',
    voterStatus: 'Registered'
  });

  // Selected resident details form state for tab 2
  const selectedResident = residents.find(r => r.id === selectedResidentId) || residents[0];
  const [editForm, setEditForm] = useState<Resident>(selectedResident || INITIAL_RESIDENTS[0]);

  const handleSelectResident = (res: Resident) => {
    setSelectedResidentId(res.id);
    setEditForm(res);
  };

  const handleAddResident = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newResident.lastName || !newResident.firstName) {
      triggerNotification('Please enter at least a Last Name and First Name');
      return;
    }

    const nextId = residents.length > 0 ? Math.max(...residents.map(r => r.id)) + 1 : 1;
    const added: Resident = {
      id: nextId,
      lastName: newResident.lastName.toUpperCase(),
      firstName: newResident.firstName.toUpperCase(),
      middleName: newResident.middleName.toUpperCase() || 'N/A',
      religion: newResident.religion || 'Catholic',
      age: parseInt(newResident.age) || 25,
      sex: newResident.sex,
      maritalStatus: newResident.maritalStatus,
      contact: newResident.contact || '09XXXXXXXXX',
      voterStatus: newResident.voterStatus
    };

    setResidents(prev => [...prev, added]);
    setNewResident({
      lastName: '',
      firstName: '',
      middleName: '',
      religion: '',
      age: '',
      sex: 'Male',
      maritalStatus: 'Single',
      contact: '',
      voterStatus: 'Registered'
    });
    triggerNotification(`Resident ${added.lastName}, ${added.firstName} added successfully!`);
  };

  const handleUpdate = () => {
    setResidents(prev => prev.map(r => r.id === editForm.id ? editForm : r));
    triggerNotification(`Resident ID #${editForm.id} updated in Excel database!`);
  };

  const handleDelete = () => {
    if (residents.length <= 1) {
      triggerNotification('Cannot delete the last remaining resident.');
      return;
    }
    setResidents(prev => prev.filter(r => r.id !== editForm.id));
    const remaining = residents.filter(r => r.id !== editForm.id);
    if (remaining.length > 0) {
      setSelectedResidentId(remaining[0].id);
      setEditForm(remaining[0]);
    }
    triggerNotification(`Resident ID #${editForm.id} removed from ledger.`);
  };

  const handlePrintClearance = () => {
    setClearanceResident(editForm);
    setPrintedCount(prev => prev + 1);
    setShowClearanceModal(true);
  };

  const triggerNotification = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(''), 4000);
  };

  const filteredResidents = residents.filter(r => {
    const q = searchQuery.toLowerCase();
    return (
      r.lastName.toLowerCase().includes(q) ||
      r.firstName.toLowerCase().includes(q) ||
      r.middleName.toLowerCase().includes(q) ||
      r.id.toString().includes(q) ||
      r.age.toString().includes(q)
    );
  });

  const maleCount = residents.filter(r => r.sex === 'Male').length;
  const femaleCount = residents.filter(r => r.sex === 'Female').length;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-5xl my-auto bg-[#ECE9D8] rounded-xl shadow-2xl border-2 border-[#0055EA] overflow-hidden font-sans select-none">
        
        {/* Windows Classic Title Bar */}
        <div className="bg-gradient-to-r from-[#0055EA] via-[#3B82F6] to-[#0055EA] text-white px-3 py-1.5 flex items-center justify-between shadow-xs">
          <div className="flex items-center gap-2">
            <FileSpreadsheet className="w-4 h-4 text-[#FFF275]" />
            <span className="text-xs sm:text-sm font-bold tracking-wide">UserForm1</span>
            <span className="text-[11px] opacity-80 font-mono hidden sm:inline">
              — Purok Data Automation &amp; Clearance System (Excel VBA)
            </span>
          </div>
          <div className="flex items-center gap-1">
            <button className="w-5 h-5 bg-[#ECE9D8] text-black border border-gray-400 rounded-xs flex items-center justify-center text-xs font-bold hover:bg-gray-200">
              _
            </button>
            <button className="w-5 h-5 bg-[#ECE9D8] text-black border border-gray-400 rounded-xs flex items-center justify-center text-xs font-bold hover:bg-gray-200">
              □
            </button>
            <button 
              onClick={onClose}
              className="w-5 h-5 bg-[#E81123] text-white rounded-xs flex items-center justify-center text-xs font-bold hover:bg-red-700 transition-colors"
            >
              ✕
            </button>
          </div>
        </div>

        {/* UserForm Tab Navigation Bar */}
        <div className="bg-[#ECE9D8] px-3 pt-2 border-b border-gray-400 flex items-center justify-between">
          <div className="flex items-center gap-1">
            <button
              onClick={() => setActiveTab('HOME')}
              className={`px-4 py-1.5 text-xs font-bold rounded-t-md border-t-2 border-x-2 transition-all ${
                activeTab === 'HOME'
                  ? 'bg-[#F0EDE0] border-gray-400 border-b-0 text-black shadow-xs'
                  : 'bg-[#DCD8C8] border-gray-400/60 text-gray-700 hover:bg-[#E4E0D0]'
              }`}
            >
              HOME
            </button>
            <button
              onClick={() => setActiveTab('LIST')}
              className={`px-4 py-1.5 text-xs font-bold rounded-t-md border-t-2 border-x-2 transition-all ${
                activeTab === 'LIST'
                  ? 'bg-[#F0EDE0] border-gray-400 border-b-0 text-black shadow-xs'
                  : 'bg-[#DCD8C8] border-gray-400/60 text-gray-700 hover:bg-[#E4E0D0]'
              }`}
            >
              LIST OF RESIDENTS
            </button>
          </div>

          <div className="flex items-center gap-2 pb-1 text-[11px] text-gray-600 font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>EXCEL VBA RUNTIME: ACTIVE</span>
          </div>
        </div>

        {/* Notification Toast */}
        {notification && (
          <div className="bg-[#FFF9C4] border-b border-[#FBC02D] px-4 py-1.5 text-xs text-[#5D4037] font-semibold flex items-center justify-between">
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#F57F17]" />
              {notification}
            </span>
            <button onClick={() => setNotification('')} className="text-gray-500 hover:text-black">✕</button>
          </div>
        )}

        {/* TAB 1: HOME (DASHBOARD & ADD RESIDENT) */}
        {activeTab === 'HOME' && (
          <div className="p-3 sm:p-5 space-y-4 bg-[#F0EDE0] text-black">
            {/* DASHBOARD GROUPBOX */}
            <fieldset className="border-2 border-gray-400 rounded-md p-4 bg-[#EBE7D8] relative">
              <legend className="px-2 text-xs font-bold text-gray-800 tracking-wider">
                DASHBOARD
              </legend>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                {/* 1. Population */}
                <div className="bg-white border-2 border-gray-400 p-3 rounded-xs flex items-center justify-between shadow-inner">
                  <div className="flex flex-col items-center justify-center text-center pr-2 border-r border-gray-300">
                    <div className="w-10 h-10 rounded-full bg-gray-100 border border-gray-300 flex items-center justify-center mb-1">
                      <Users className="w-6 h-6 text-[#1F2E2B]" />
                    </div>
                    <span className="text-[10px] font-bold tracking-tight text-gray-700 uppercase">
                      POPULATION
                    </span>
                  </div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-red-600 tracking-tight pl-2">
                    {residents.length}
                  </div>
                </div>

                {/* 2. Printed Clearances */}
                <div className="bg-white border-2 border-gray-400 p-3 rounded-xs flex items-center justify-between shadow-inner">
                  <div className="flex flex-col items-center justify-center text-center pr-2 border-r border-gray-300">
                    <div className="w-10 h-10 rounded-full bg-cyan-50 border border-cyan-300 flex items-center justify-center mb-1">
                      <FileText className="w-6 h-6 text-[#00838F]" />
                    </div>
                    <span className="text-[10px] font-bold tracking-tight text-gray-700 uppercase leading-tight">
                      PRINTED CLEARANCE(S)
                    </span>
                  </div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-red-600 tracking-tight pl-2">
                    {printedCount}
                  </div>
                </div>

                {/* 3. Male */}
                <div className="bg-white border-2 border-gray-400 p-3 rounded-xs flex items-center justify-between shadow-inner">
                  <div className="flex flex-col items-center justify-center text-center pr-2 border-r border-gray-300">
                    <div className="w-10 h-10 rounded-full bg-blue-50 border border-blue-300 flex items-center justify-center mb-1">
                      <UserCheck className="w-6 h-6 text-blue-700" />
                    </div>
                    <span className="text-[10px] font-bold tracking-tight text-gray-700 uppercase">
                      MALE
                    </span>
                  </div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-red-600 tracking-tight pl-2">
                    {maleCount}
                  </div>
                </div>

                {/* 4. Female */}
                <div className="bg-white border-2 border-gray-400 p-3 rounded-xs flex items-center justify-between shadow-inner">
                  <div className="flex flex-col items-center justify-center text-center pr-2 border-r border-gray-300">
                    <div className="w-10 h-10 rounded-full bg-pink-50 border border-pink-300 flex items-center justify-center mb-1">
                      <Users className="w-6 h-6 text-pink-600" />
                    </div>
                    <span className="text-[10px] font-bold tracking-tight text-gray-700 uppercase">
                      FEMALE
                    </span>
                  </div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-red-600 tracking-tight pl-2">
                    {femaleCount}
                  </div>
                </div>
              </div>

              {/* Action Buttons under Dashboard */}
              <div className="flex flex-wrap gap-2.5 mt-4">
                <button
                  type="button"
                  onClick={() => setActiveTab('LIST')}
                  className="px-4 py-1.5 bg-[#90EE90] hover:bg-[#7CCD7C] border-2 border-gray-500 rounded-xs text-xs font-bold shadow-xs active:translate-y-0.5 text-black"
                >
                  LIST OF RESIDENTS
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setActiveTab('LIST');
                    triggerNotification('Census ledger loaded with all active records.');
                  }}
                  className="px-4 py-1.5 bg-[#FFF275] hover:bg-[#FFE066] border-2 border-gray-500 rounded-xs text-xs font-bold shadow-xs active:translate-y-0.5 text-black"
                >
                  GENERATE LIST
                </button>
                <button
                  type="button"
                  onClick={() => triggerNotification('Dashboard metrics refreshed from Excel database.')}
                  className="px-4 py-1.5 bg-[#C6D8FF] hover:bg-[#ADC8FF] border-2 border-gray-500 rounded-xs text-xs font-bold shadow-xs active:translate-y-0.5 text-black flex items-center gap-1.5"
                >
                  <RefreshCw className="w-3 h-3" />
                  <span>REFRESH</span>
                </button>
              </div>
            </fieldset>

            {/* ADD RESIDENT GROUPBOX */}
            <fieldset className="border-2 border-gray-400 rounded-md p-4 bg-[#EBE7D8]">
              <legend className="px-2 text-xs font-bold text-gray-800 tracking-wider">
                ADD RESIDENT
              </legend>

              <form onSubmit={handleAddResident} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Left Form Column */}
                <div className="space-y-2.5">
                  <div className="grid grid-cols-3 items-center gap-2">
                    <label className="text-xs font-bold text-gray-800">LAST NAME</label>
                    <input
                      type="text"
                      value={newResident.lastName}
                      onChange={e => setNewResident({ ...newResident, lastName: e.target.value })}
                      placeholder="e.g. PAGLINAWAN"
                      className="col-span-2 px-2 py-1 bg-white border border-gray-400 rounded-xs text-xs focus:bg-yellow-50 outline-none uppercase font-semibold"
                    />
                  </div>

                  <div className="grid grid-cols-3 items-center gap-2">
                    <label className="text-xs font-bold text-gray-800">FIRST NAME</label>
                    <input
                      type="text"
                      value={newResident.firstName}
                      onChange={e => setNewResident({ ...newResident, firstName: e.target.value })}
                      placeholder="e.g. REASHANE"
                      className="col-span-2 px-2 py-1 bg-white border border-gray-400 rounded-xs text-xs focus:bg-yellow-50 outline-none uppercase font-semibold"
                    />
                  </div>

                  <div className="grid grid-cols-3 items-center gap-2">
                    <label className="text-xs font-bold text-gray-800">MIDDLE NAME</label>
                    <input
                      type="text"
                      value={newResident.middleName}
                      onChange={e => setNewResident({ ...newResident, middleName: e.target.value })}
                      placeholder="e.g. ANDALES"
                      className="col-span-2 px-2 py-1 bg-white border border-gray-400 rounded-xs text-xs focus:bg-yellow-50 outline-none uppercase font-semibold"
                    />
                  </div>

                  <div className="grid grid-cols-3 items-center gap-2">
                    <label className="text-xs font-bold text-gray-800">RELIGION</label>
                    <input
                      type="text"
                      value={newResident.religion}
                      onChange={e => setNewResident({ ...newResident, religion: e.target.value })}
                      placeholder="e.g. Catholic"
                      className="col-span-2 px-2 py-1 bg-white border border-gray-400 rounded-xs text-xs focus:bg-yellow-50 outline-none font-semibold"
                    />
                  </div>

                  <div className="grid grid-cols-3 items-center gap-2">
                    <label className="text-xs font-bold text-gray-800">AGE</label>
                    <input
                      type="number"
                      value={newResident.age}
                      onChange={e => setNewResident({ ...newResident, age: e.target.value })}
                      placeholder="e.g. 26"
                      className="col-span-2 px-2 py-1 bg-white border border-gray-400 rounded-xs text-xs focus:bg-yellow-50 outline-none font-semibold"
                    />
                  </div>
                </div>

                {/* Right Form Column */}
                <div className="space-y-2.5 flex flex-col justify-between">
                  <div className="space-y-2.5">
                    <div className="grid grid-cols-3 items-center gap-2">
                      <label className="text-xs font-bold text-gray-800">SEX</label>
                      <select
                        value={newResident.sex}
                        onChange={e => setNewResident({ ...newResident, sex: e.target.value as 'Male' | 'Female' })}
                        className="col-span-2 px-2 py-1 bg-white border border-gray-400 rounded-xs text-xs font-semibold"
                      >
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                      </select>
                    </div>

                    <div className="grid grid-cols-3 items-center gap-2">
                      <label className="text-xs font-bold text-gray-800">MARITAL STATUS</label>
                      <select
                        value={newResident.maritalStatus}
                        onChange={e => setNewResident({ ...newResident, maritalStatus: e.target.value as any })}
                        className="col-span-2 px-2 py-1 bg-white border border-gray-400 rounded-xs text-xs font-semibold"
                      >
                        <option value="Single">Single</option>
                        <option value="Married">Married</option>
                        <option value="Widowed">Widowed</option>
                        <option value="Divorced">Divorced</option>
                      </select>
                    </div>

                    <div className="grid grid-cols-3 items-center gap-2">
                      <label className="text-xs font-bold text-gray-800">CONTACT</label>
                      <input
                        type="text"
                        value={newResident.contact}
                        onChange={e => setNewResident({ ...newResident, contact: e.target.value })}
                        placeholder="e.g. 09171234560"
                        className="col-span-2 px-2 py-1 bg-white border border-gray-400 rounded-xs text-xs focus:bg-yellow-50 outline-none font-semibold"
                      />
                    </div>

                    <div className="grid grid-cols-3 items-center gap-2">
                      <label className="text-xs font-bold text-gray-800">VOTER STATUS</label>
                      <select
                        value={newResident.voterStatus}
                        onChange={e => setNewResident({ ...newResident, voterStatus: e.target.value as any })}
                        className="col-span-2 px-2 py-1 bg-white border border-gray-400 rounded-xs text-xs font-semibold"
                      >
                        <option value="Registered">Registered</option>
                        <option value="Non-Registered">Non-Registered</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex justify-end pt-2">
                    <button
                      type="submit"
                      className="px-6 py-2 bg-[#00FF00] hover:bg-[#00E000] border-2 border-gray-600 rounded-xs text-xs font-extrabold text-black shadow-md active:translate-y-0.5 tracking-wider uppercase"
                    >
                      ADD
                    </button>
                  </div>
                </div>
              </form>
            </fieldset>
          </div>
        )}

        {/* TAB 2: LIST OF RESIDENTS */}
        {activeTab === 'LIST' && (
          <div className="p-3 sm:p-5 space-y-4 bg-[#F0EDE0] text-black">
            {/* Top Row: DETAILS + ACTIONS */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
              {/* DETAILS GROUPBOX (3 Columns) */}
              <fieldset className="lg:col-span-3 border-2 border-gray-400 rounded-md p-3.5 bg-[#EBE7D8]">
                <legend className="px-2 text-xs font-bold text-gray-800 tracking-wider">
                  DETAILS
                </legend>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                  {/* Left Column */}
                  <div className="space-y-2">
                    <div className="grid grid-cols-3 items-center gap-2">
                      <label className="text-[11px] font-bold text-gray-800">LAST NAME</label>
                      <input
                        type="text"
                        value={editForm.lastName}
                        onChange={e => setEditForm({ ...editForm, lastName: e.target.value })}
                        className="col-span-2 px-2 py-0.5 bg-white border border-gray-400 rounded-xs text-xs font-semibold uppercase"
                      />
                    </div>

                    <div className="grid grid-cols-3 items-center gap-2">
                      <label className="text-[11px] font-bold text-gray-800">FIRST NAME</label>
                      <input
                        type="text"
                        value={editForm.firstName}
                        onChange={e => setEditForm({ ...editForm, firstName: e.target.value })}
                        className="col-span-2 px-2 py-0.5 bg-white border border-gray-400 rounded-xs text-xs font-semibold uppercase"
                      />
                    </div>

                    <div className="grid grid-cols-3 items-center gap-2">
                      <label className="text-[11px] font-bold text-gray-800">MIDDLE NAME</label>
                      <input
                        type="text"
                        value={editForm.middleName}
                        onChange={e => setEditForm({ ...editForm, middleName: e.target.value })}
                        className="col-span-2 px-2 py-0.5 bg-white border border-gray-400 rounded-xs text-xs font-semibold uppercase"
                      />
                    </div>

                    <div className="grid grid-cols-3 items-center gap-2">
                      <label className="text-[11px] font-bold text-gray-800">RELIGION</label>
                      <input
                        type="text"
                        value={editForm.religion}
                        onChange={e => setEditForm({ ...editForm, religion: e.target.value })}
                        className="col-span-2 px-2 py-0.5 bg-white border border-gray-400 rounded-xs text-xs font-semibold"
                      />
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="space-y-2">
                    <div className="grid grid-cols-3 items-center gap-2">
                      <label className="text-[11px] font-bold text-gray-800">AGE</label>
                      <input
                        type="number"
                        value={editForm.age}
                        onChange={e => setEditForm({ ...editForm, age: parseInt(e.target.value) || 0 })}
                        className="col-span-2 px-2 py-0.5 bg-white border border-gray-400 rounded-xs text-xs font-semibold"
                      />
                    </div>

                    <div className="grid grid-cols-3 items-center gap-2">
                      <label className="text-[11px] font-bold text-gray-800">SEX</label>
                      <select
                        value={editForm.sex}
                        onChange={e => setEditForm({ ...editForm, sex: e.target.value as any })}
                        className="col-span-2 px-2 py-0.5 bg-white border border-gray-400 rounded-xs text-xs font-semibold"
                      >
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                      </select>
                    </div>

                    <div className="grid grid-cols-3 items-center gap-2">
                      <label className="text-[11px] font-bold text-gray-800">MARITAL STATUS</label>
                      <select
                        value={editForm.maritalStatus}
                        onChange={e => setEditForm({ ...editForm, maritalStatus: e.target.value as any })}
                        className="col-span-2 px-2 py-0.5 bg-white border border-gray-400 rounded-xs text-xs font-semibold"
                      >
                        <option value="Single">Single</option>
                        <option value="Married">Married</option>
                        <option value="Widowed">Widowed</option>
                        <option value="Divorced">Divorced</option>
                      </select>
                    </div>

                    <div className="grid grid-cols-3 items-center gap-2">
                      <label className="text-[11px] font-bold text-gray-800">CONTACT</label>
                      <input
                        type="text"
                        value={editForm.contact}
                        onChange={e => setEditForm({ ...editForm, contact: e.target.value })}
                        className="col-span-2 px-2 py-0.5 bg-white border border-gray-400 rounded-xs text-xs font-semibold"
                      />
                    </div>

                    <div className="grid grid-cols-3 items-center gap-2">
                      <label className="text-[11px] font-bold text-gray-800">VOTER STATUS</label>
                      <select
                        value={editForm.voterStatus}
                        onChange={e => setEditForm({ ...editForm, voterStatus: e.target.value as any })}
                        className="col-span-2 px-2 py-0.5 bg-white border border-gray-400 rounded-xs text-xs font-semibold"
                      >
                        <option value="Registered">Registered</option>
                        <option value="Non-Registered">Non-Registered</option>
                      </select>
                    </div>
                  </div>
                </div>
              </fieldset>

              {/* ACTIONS & PRINT CLEARANCE (1 Column) */}
              <div className="space-y-3">
                {/* ACTIONS */}
                <fieldset className="border-2 border-gray-400 rounded-md p-2.5 bg-[#EBE7D8] flex flex-col gap-1.5">
                  <legend className="px-1.5 text-[10px] font-bold text-gray-800 tracking-wider">
                    ACTIONS
                  </legend>
                  <button
                    type="button"
                    onClick={() => setActiveTab('HOME')}
                    className="w-full py-1 bg-[#00FFFF] hover:bg-[#00E5E5] border border-gray-600 rounded-xs text-xs font-extrabold text-black shadow-xs active:translate-y-0.5"
                  >
                    HOME
                  </button>
                  <button
                    type="button"
                    onClick={handleUpdate}
                    className="w-full py-1 bg-[#90EE90] hover:bg-[#7CCD7C] border border-gray-600 rounded-xs text-xs font-extrabold text-black shadow-xs active:translate-y-0.5"
                  >
                    UPDATE
                  </button>
                  <button
                    type="button"
                    onClick={() => triggerNotification(`Editing mode active for ID #${editForm.id}`)}
                    className="w-full py-1 bg-[#FFFF00] hover:bg-[#EEEE00] border border-gray-600 rounded-xs text-xs font-extrabold text-black shadow-xs active:translate-y-0.5"
                  >
                    EDIT
                  </button>
                  <button
                    type="button"
                    onClick={handleDelete}
                    className="w-full py-1 bg-[#FF8080] hover:bg-[#FF6666] border border-gray-600 rounded-xs text-xs font-extrabold text-black shadow-xs active:translate-y-0.5"
                  >
                    DELETE
                  </button>
                </fieldset>

                {/* PRINT CLEARANCE */}
                <fieldset className="border-2 border-gray-400 rounded-md p-2 bg-[#EBE7D8]">
                  <legend className="px-1.5 text-[10px] font-bold text-gray-800 tracking-wider">
                    PRINT CLEARANCE
                  </legend>
                  <button
                    type="button"
                    onClick={handlePrintClearance}
                    className="w-full py-1.5 bg-[#FFF07C] hover:bg-[#FFE600] border-2 border-gray-600 rounded-xs text-xs font-extrabold text-black shadow-xs active:translate-y-0.5 flex items-center justify-center gap-1.5"
                  >
                    <Printer className="w-3.5 h-3.5" />
                    <span>PRINT</span>
                  </button>
                </fieldset>
              </div>
            </div>

            {/* SEARCH ROW */}
            <div className="flex items-center gap-2">
              <label className="text-xs font-bold text-gray-800 tracking-wider">SEARCH</label>
              <div className="flex-1 flex items-center">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  placeholder="Filter by ID, name, or age..."
                  className="w-full px-2 py-1 bg-white border border-gray-400 rounded-l-xs text-xs focus:bg-yellow-50 outline-none font-semibold uppercase"
                />
                <button
                  type="button"
                  className="px-3 py-1 bg-[#EBE7D8] border border-l-0 border-gray-400 rounded-r-xs flex items-center justify-center hover:bg-gray-300"
                >
                  <Search className="w-3.5 h-3.5 text-gray-700" />
                </button>
              </div>
            </div>

            {/* RESIDENTS TABLE / LISTBOX (Peach background style) */}
            <div className="border-2 border-gray-500 rounded-xs overflow-hidden bg-[#FFE6CC] shadow-inner">
              <div className="overflow-x-auto max-h-56">
                <table className="w-full text-left border-collapse text-xs font-mono">
                  <thead>
                    <tr className="bg-[#FFD4A3] text-gray-900 border-b-2 border-gray-400 text-[11px] font-bold">
                      <th className="p-1.5 border-r border-gray-300 w-12">ID</th>
                      <th className="p-1.5 border-r border-gray-300">LAST NAME</th>
                      <th className="p-1.5 border-r border-gray-300">FIRST NAME</th>
                      <th className="p-1.5 border-r border-gray-300">MIDDLE NAME</th>
                      <th className="p-1.5">AGE</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredResidents.map(res => {
                      const isSelected = res.id === editForm.id;
                      return (
                        <tr
                          key={res.id}
                          onClick={() => handleSelectResident(res)}
                          className={`cursor-pointer transition-colors border-b border-gray-300/50 ${
                            isSelected 
                              ? 'bg-[#0055EA] text-white font-bold' 
                              : 'hover:bg-[#FFD4A3]/50 text-gray-900'
                          }`}
                        >
                          <td className="p-1.5 border-r border-gray-300/40">{res.id}</td>
                          <td className="p-1.5 border-r border-gray-300/40">{res.lastName}</td>
                          <td className="p-1.5 border-r border-gray-300/40">{res.firstName}</td>
                          <td className="p-1.5 border-r border-gray-300/40">{res.middleName}</td>
                          <td className="p-1.5">{res.age}</td>
                        </tr>
                      );
                    })}
                    {filteredResidents.length === 0 && (
                      <tr>
                        <td colSpan={5} className="p-4 text-center text-gray-500 font-sans text-xs">
                          No matching resident records found in Excel database.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Modal Footer Status Bar */}
        <div className="bg-[#DCD8C8] px-4 py-2 border-t border-gray-400 flex flex-wrap items-center justify-between text-xs text-gray-700">
          <div className="flex items-center gap-2">
            <span className="font-bold">Total Records:</span> {residents.length} | 
            <span className="font-bold ml-1">Males:</span> {maleCount} | 
            <span className="font-bold ml-1">Females:</span> {femaleCount} | 
            <span className="font-bold ml-1">Clearances Issued:</span> {printedCount}
          </div>
          <button
            onClick={onClose}
            className="px-3 py-1 bg-white border border-gray-400 rounded-xs text-xs font-semibold hover:bg-gray-100"
          >
            Close UserForm Simulator
          </button>
        </div>

      </div>

      {/* PRINTED PUROK CLEARANCE PREVIEW DIALOG */}
      {showClearanceModal && clearanceResident && (
        <div className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 text-black border-4 border-[#1F2E2B] shadow-2xl relative space-y-6">
            <button
              onClick={() => setShowClearanceModal(false)}
              className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-gray-100 text-gray-500"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Official Header */}
            <div className="text-center space-y-1 border-b-2 border-gray-300 pb-4">
              <div className="text-[11px] font-serif uppercase tracking-widest text-gray-600">
                Republic of the Philippines • Barangay Administration
              </div>
              <h2 className="text-xl sm:text-2xl font-serif font-black tracking-wide text-[#1F2E2B]">
                OFFICE OF THE PUROK PRESIDENT
              </h2>
              <div className="text-xs font-bold text-[#5B7B75] tracking-wider">
                BARANGAY PUROK CLEARANCE CERTIFICATE
              </div>
            </div>

            {/* Certificate Body */}
            <div className="space-y-4 text-xs sm:text-sm leading-relaxed text-gray-800 font-serif">
              <p className="font-bold text-gray-900">
                TO WHOM IT MAY CONCERN:
              </p>
              <p className="text-justify">
                This is to certify that <strong className="underline font-bold text-black uppercase">{clearanceResident.firstName} {clearanceResident.middleName} {clearanceResident.lastName}</strong>, 
                aged <strong>{clearanceResident.age}</strong> years old, <strong>{clearanceResident.sex}</strong>, <strong>{clearanceResident.maritalStatus}</strong>, 
                with religion <strong>{clearanceResident.religion}</strong> and Voter Status <strong>{clearanceResident.voterStatus}</strong>, 
                is a bonafide resident of this Purok and is known to be of good moral character and a law-abiding citizen with no derogatory record filed in this office.
              </p>
              <p className="text-justify">
                This certification is hereby issued upon the request of the above-mentioned person for whatever legal purpose it may serve.
              </p>
            </div>

            {/* Signatures */}
            <div className="pt-6 border-t border-gray-200 grid grid-cols-2 gap-4 text-xs font-serif">
              <div>
                <div className="text-gray-500">Issued On:</div>
                <div className="font-bold">{new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</div>
                <div className="text-[10px] text-gray-500 mt-1">Ref No: PRC-{clearanceResident.id}-{printedCount}</div>
              </div>
              <div className="text-right space-y-1">
                <div className="font-bold text-gray-900 underline uppercase">REASHANE PAGLINAWAN</div>
                <div className="text-[11px] text-gray-600">Purok President / Admin Officer</div>
              </div>
            </div>

            {/* Print Button */}
            <div className="flex justify-end gap-2 pt-2">
              <button
                onClick={() => {
                  window.print();
                }}
                className="px-4 py-2 bg-[#1F2E2B] text-white rounded-xl text-xs font-bold flex items-center gap-1.5 hover:bg-[#2F8A5B]"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print Document</span>
              </button>
              <button
                onClick={() => setShowClearanceModal(false)}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded-xl text-xs font-bold hover:bg-gray-300"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
