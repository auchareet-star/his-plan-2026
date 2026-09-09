/* ============================================================
   nav.js — แหล่งข้อมูลเดียวของเมนู/สารบัญทุกหน้าใน html/
   ------------------------------------------------------------
   เพิ่มหน้าใหม่ = เติม 1 บรรทัดใน AY_PAGES แล้วจบ
   ทั้งหน้าสารบัญ (index.html) และแถบเมนูบนทุกหน้าจะอัปเดตตามเอง

   ฟิลด์ของแต่ละหน้า
     f = ชื่อไฟล์            t = ชื่อสั้นที่โชว์
     g = หมวด (ดู AY_GROUPS)  s = site (ดู AY_SITES)
     b = base key   ใช้จับคู่ "หน้าเดียวกันของอีกไซต์"
                    (หน้าที่ b ตรงกัน จะขึ้นเป็นปุ่มสลับไซต์ให้กันเอง)
     k = 'slide' ถ้าเป็นสไลด์นำเสนอ (ว่าง = หน้าข้อมูลปกติ)
     d = คำอธิบายสั้น
   ============================================================ */

var AY_SITES = {
  all : { t:'รวม 2 Site',       ab:'รวม',       c:'#0d6e6e' },
  dtwu: { t:'DTWU / วลัยลักษณ์', ab:'DTWU',      c:'#9560b8' },
  msm : { t:'เมืองสมุทร',        ab:'เมืองสมุทร', c:'#2f7cc4' },
  hisp: { t:'งานกลาง (HISP)',   ab:'งานกลาง',   c:'#c08a1e' },
  dtmu: { t:'DTMU (ระบบฐาน)',   ab:'DTMU',      c:'#5b9bd5' }
};

var AY_GROUPS = [
  { k:'overview',  ic:'🗺️', t:'ภาพรวม / Site View' },
  { k:'timeline',  ic:'📅', t:'Timeline · Gantt · งวดงาน' },
  { k:'fitgap',    ic:'🧩', t:'Fit Gap' },
  { k:'checklist', ic:'📋', t:'Checklist' },
  { k:'jira',      ic:'🃏', t:'Jira Cards' },
  { k:'migration', ic:'🔄', t:'Data Migration' },
  { k:'risk',      ic:'⚠️', t:'ความเสี่ยง · Security · Quality' },
  { k:'team',      ic:'👥', t:'ทีมงาน / ผังองค์กร' },
  { k:'tech',      ic:'🔌', t:'Integration · Workflow' },
  { k:'scope',     ic:'📑', t:'ขอบเขต / สัญญา' }
];

var AY_PAGES = [
  /* ---------- ภาพรวม / Site View ---------- */
  { f:'process-flow.html', t:'Flow การทำงาน (Requirement → Work Product)', g:'overview', s:'all', b:'process-flow',
    d:'ขั้นตอนทำงานตั้งแต่รับ requirement จนส่งมอบ · 13 ขั้น 3 Gate 4 ลูป · ใครทำอะไร · ได้ work product อะไร' },
  { f:'dtwu.html', t:'DTWU / วลัยลักษณ์', g:'overview', s:'dtwu', b:'site',
    d:'หน้ารวมของ DTWU — Gantt สไลด์ · Checklist · เอกสารส่งมอบ เฉพาะไซต์นี้' },
  { f:'msm.html', t:'เมืองสมุทร (ปู่เจ้าฯ + ปากน้ำ)', g:'overview', s:'msm', b:'site',
    d:'หน้ารวมของเมืองสมุทร — Gantt สไลด์ · Checklist · เอกสารส่งมอบ เฉพาะไซต์นี้' },

  /* ---------- Timeline · Gantt · งวดงาน ---------- */
  { f:'timeline.html', t:'Timeline + Gantt', g:'timeline', s:'all', b:'timeline',
    d:'Key Dates · Sprint S1–S20 · Gantt 3 Site + Gantt รายละเอียดราย รพ. (อิงวันที่จริง)' },
  { f:'timeline-dtwu.html', t:'Timeline + Gantt', g:'timeline', s:'dtwu', b:'timeline',
    d:'Timeline และ Gantt เฉพาะ DTWU / วลัยลักษณ์' },
  { f:'timeline-msm.html', t:'Timeline + Gantt', g:'timeline', s:'msm', b:'timeline',
    d:'Timeline และ Gantt เฉพาะเมืองสมุทร (ปู่เจ้าฯ + ปากน้ำ)' },
  { f:'timeline-5phase-dtwu.html', t:'แผน 5 Phase', g:'timeline', s:'dtwu', b:'5phase',
    d:'มุมมองแผนแบ่ง 5 Phase ของ DTWU' },
  { f:'timeline-5phase-msm.html', t:'แผน 5 Phase', g:'timeline', s:'msm', b:'5phase',
    d:'มุมมองแผนแบ่ง 5 Phase ของเมืองสมุทร' },
  { f:'timeline-samut.html', t:'Timeline งวดงาน', g:'timeline', s:'msm', b:'timeline-pay',
    d:'ไทม์ไลน์ผูกกับงวดงาน 3 งวดตาม TOR เมืองสมุทร' },
  { f:'gantt-slide-dtwu.html', t:'Gantt (สไลด์)', g:'timeline', s:'dtwu', b:'gantt-slide', k:'slide',
    d:'Gantt แผนหน้าเดียวสำหรับนำเสนอ — DTWU' },
  { f:'gantt-slide-msm.html', t:'Gantt (สไลด์)', g:'timeline', s:'msm', b:'gantt-slide', k:'slide',
    d:'Gantt แผนหน้าเดียวสำหรับนำเสนอ — เมืองสมุทร' },
  { f:'gantt-fitgap-2site.html', t:'Gantt Fit Gap → Dev (2 Site)', g:'timeline', s:'all', b:'gantt-fg',
    d:'Gantt เส้นทาง Fit Gap → UX/UI → Dev วางซ้อน 2 ไซต์ในหน้าเดียว' },

  /* ---------- Fit Gap ---------- */
  { f:'module-fitgap.html', t:'Module Fit Gap Matrix', g:'fitgap', s:'all', b:'module-fitgap',
    d:'ตารางโมดูล Fit/Config/Partial/Gap · ใครดู · Flow AS-IS/TO-BE · Final Checklist · รอบนำเสนอ User' },
  { f:'module-fitgap-dtwu.html', t:'Module Fit Gap Matrix', g:'fitgap', s:'dtwu', b:'module-fitgap',
    d:'ตารางโมดูล Fit Gap เฉพาะ DTWU' },
  { f:'module-fitgap-msm.html', t:'Module Fit Gap Matrix', g:'fitgap', s:'msm', b:'module-fitgap',
    d:'ตารางโมดูล Fit Gap เฉพาะเมืองสมุทร' },
  { f:'fitgap-workshop.html', t:'Fit Gap Workshop', g:'fitgap', s:'all', b:'fitgap-workshop',
    d:'แผนประชุม Fit Gap รายโมดูล — ใครต้องไป / วันไหน / ห้องไหน' },
  { f:'fitgap-workshop-dtwu.html', t:'Fit Gap Workshop', g:'fitgap', s:'dtwu', b:'fitgap-workshop',
    d:'แผนประชุม Fit Gap เฉพาะ DTWU พร้อมรายชื่ออาจารย์/หน่วยงาน' },
  { f:'fitgap-workshop-msm.html', t:'Fit Gap Workshop', g:'fitgap', s:'msm', b:'fitgap-workshop',
    d:'แผนประชุม Fit Gap เฉพาะเมืองสมุทร' },
  { f:'fitgap-summary.html', t:'Fit Gap Summary', g:'fitgap', s:'all', b:'fitgap-summary',
    d:'นับข้อ Fit/Config/Partial/Gap — กรอกได้ รวมยอดอัตโนมัติ' },
  { f:'fitgap-summary-dtwu.html', t:'Fit Gap Summary', g:'fitgap', s:'dtwu', b:'fitgap-summary',
    d:'สรุปยอด Fit Gap เฉพาะ DTWU' },
  { f:'fitgap-summary-msm.html', t:'Fit Gap Summary', g:'fitgap', s:'msm', b:'fitgap-summary',
    d:'สรุปยอด Fit Gap เฉพาะเมืองสมุทร' },
  { f:'fitgap-timeline.html', t:'Timeline Fit Gap → UX/UI → Dev', g:'fitgap', s:'all', b:'fitgap-timeline',
    d:'Product เดียวกัน — Req แยกไซต์ แต่วิเคราะห์/UX/UI/Dev รวมกันสำหรับโมดูลร่วม ลงวันที่จริง' },
  { f:'fitgap-timeline-msm.html', t:'Timeline Fit Gap → UX/UI → Dev', g:'fitgap', s:'msm', b:'fitgap-timeline',
    d:'เส้นทาง Fit Gap → UX/UI → Dev ลงวันที่ เฉพาะเมืองสมุทร' },
  { f:'fitgap-timeline-slide-msm.html', t:'Timeline Fit Gap → Dev (สไลด์)', g:'fitgap', s:'msm', b:'fitgap-timeline-slide', k:'slide',
    d:'สไลด์เส้นทาง Fit Gap → UX/UI → Dev — เมืองสมุทร' },
  { f:'fit-gap-slide-dtwu.html', t:'Fit Gap นัดรายวัน (สไลด์)', g:'fitgap', s:'dtwu', b:'fitgap-slide', k:'slide',
    d:'สไลด์ตารางนัด Fit Gap รายวัน — DTWU' },
  { f:'fit-gap-slide-msm.html', t:'Fit Gap นัดรายวัน (สไลด์)', g:'fitgap', s:'msm', b:'fitgap-slide', k:'slide',
    d:'สไลด์ตารางนัด Fit Gap รายวัน — เมืองสมุทร' },
  { f:'fitgap-sitewalk-slide-msm.html', t:'Site Walkthrough ก่อน Fit Gap (สไลด์)', g:'fitgap', s:'msm', b:'sitewalk', k:'slide',
    d:'สไลด์แผนเดินดูหน้างานจริงก่อนเริ่ม Fit Gap — เมืองสมุทร' },

  /* ---------- Checklist ---------- */
  { f:'checklist.html', t:'Checklist (รวม 2 Site)', g:'checklist', s:'all', b:'checklist',
    d:'งานทุก Sprint ของทั้ง 2 ไซต์ พร้อมเจ้าของงานและผลลัพธ์' },
  { f:'checklist-dtwu.html', t:'Checklist', g:'checklist', s:'dtwu', b:'checklist',
    d:'งานทุก Sprint พร้อมเจ้าของและผลลัพธ์ — DTWU / วลัยลักษณ์' },
  { f:'checklist-msm.html', t:'Checklist', g:'checklist', s:'msm', b:'checklist',
    d:'งานทุก Sprint — เมืองสมุทรปู่เจ้าฯ + HosXP Migration' },

  /* ---------- Jira Cards ---------- */
  { f:'jira-cards.html', t:'Jira Cards (รายคน)', g:'jira', s:'all', b:'jira-cards',
    d:'การ์ดงานแยกรายคน พร้อมรายละเอียดและ Epic' },
  { f:'jira-cards-dtwu.html', t:'Jira Cards (รายคน)', g:'jira', s:'dtwu', b:'jira-cards',
    d:'การ์ดงานแยกรายคน — โปรเจกต์ WUH' },
  { f:'jira-cards-msm.html', t:'Jira Cards (รายคน)', g:'jira', s:'msm', b:'jira-cards',
    d:'การ์ดงานแยกรายคน — โปรเจกต์ MSH' },
  { f:'jira-cards-sprint.html', t:'Jira Cards (แยกตาม Sprint)', g:'jira', s:'all', b:'jira-sprint',
    d:'การ์ดงานจัดกลุ่มตาม Sprint ทั้ง 2 ไซต์' },
  { f:'jira-cards-sprint-dtwu.html', t:'Jira Cards (แยกตาม Sprint)', g:'jira', s:'dtwu', b:'jira-sprint',
    d:'การ์ดงานจัดกลุ่มตาม Sprint — DTWU' },
  { f:'jira-cards-sprint-msm.html', t:'Jira Cards (แยกตาม Sprint)', g:'jira', s:'msm', b:'jira-sprint',
    d:'การ์ดงานจัดกลุ่มตาม Sprint — เมืองสมุทร' },
  { f:'jira-cards-hisp.html', t:'Jira Cards — งานกลาง (HISP)', g:'jira', s:'hisp', b:'jira-hisp',
    d:'การ์ดงาน PMO / Governance ที่ไม่ผูกไซต์ — Epic HISP-242' },

  /* ---------- Data Migration ---------- */
  { f:'data-migration-plan-msm.html', t:'แผนการโอนย้ายข้อมูล', g:'migration', s:'msm', b:'mig-plan',
    d:'แผน Data Migration จาก HOSxP เดิมมา HA.OS — ขั้นตอน รอบทดสอบ เกณฑ์ตรวจรับ' },
  { f:'data-migration-requirement-msm.html', t:'ตัวอย่างเอกสาร Migration Requirement', g:'migration', s:'msm', b:'mig-req',
    d:'เทมเพลตเอกสาร Requirement การโอนย้ายข้อมูลที่ใช้คุยกับ รพ.' },
  { f:'data-migration-checklist-msm.html', t:'Checklist Data Migration', g:'migration', s:'msm', b:'mig-check',
    d:'รายการตรวจงาน Migration ทีละขั้น พร้อมผู้รับผิดชอบ' },
  { f:'data-migration-slide-msm.html', t:'Data Migration (สไลด์)', g:'migration', s:'msm', b:'mig-slide', k:'slide',
    d:'สไลด์สรุปแผน Data Migration สำหรับนำเสนอ รพ.' },
  { f:'data-migration-raci-slide-msm.html', t:'Migration — บริษัททำ / รพ. ช่วย (สไลด์)', g:'migration', s:'msm', b:'mig-raci', k:'slide',
    d:'สไลด์แบ่งความรับผิดชอบ RACI ว่าบริษัททำอะไร รพ. ต้องช่วยอะไร' },

  /* ---------- ความเสี่ยง · Security · Quality ---------- */
  { f:'risk.html', t:'Risk Register', g:'risk', s:'all', b:'risk',
    d:'ความเสี่ยง 15 ข้อ · Migration HosXP 3 เวอร์ชัน · ทีมคอขวด · Dependency DTMU' },
  { f:'risk-security-quality.html', t:'ความเสี่ยง Security + Quality (สไลด์)', g:'risk', s:'all', b:'risk-sq', k:'slide',
    d:'สไลด์ความเสี่ยงด้าน Security และ Quality พร้อมมาตรการรับมือ' },

  /* ---------- ทีมงาน / ผังองค์กร ---------- */
  { f:'org-chart-samut.html', t:'ผังทีมงานฉบับเต็ม (25 คน)', g:'team', s:'all', b:'org-full',
    d:'ผังทีมงานรวมทีมเดียว 25 คน + คอลัมน์ที่ปรึกษาแยก' },
  { f:'org-chart-pm-delivery-technical.html', t:'Delivery PM vs Technical PM', g:'team', s:'all', b:'org-pm',
    d:'เปรียบบทบาท Delivery PM กับ Technical PM ของทั้ง DTWU และเมืองสมุทร' },

  /* ---------- Integration · Workflow ---------- */
  { f:'gems-webapi-integration-msm.html', t:'เชื่อมต่อ LIS (GEMs) ⇄ HA.OS', g:'tech', s:'msm', b:'gems',
    d:'สเปก WebAPI เชื่อม LIS ของ GEMs กับ HA.OS — เมืองสมุทร' },
  { f:'workflow-registration-dtmu.html', t:'Workflow งานเวชระเบียน (DTMU)', g:'tech', s:'dtmu', b:'wf-reg',
    d:'ผัง Workflow งานเวชระเบียนบนระบบฐาน DTMU ที่อีก 2 ไซต์ต่อยอด' },

  /* ---------- ขอบเขต / สัญญา ---------- */
  { f:'module-reconciliation.html', t:'กระทบยอดโมดูล (สัญญาแนบ 1 ↔ MasterPlan)', g:'scope', s:'msm', b:'recon',
    d:'ทานรายการโมดูลในสัญญาแนบ 1 กับ MasterPlan ว่าตรงกันหรือขาด/เกิน' }
];

/* ลิงก์ออกนอกโฟลเดอร์ html/ — เก็บ path แบบอ้างจากรากโปรเจกต์ */
var AY_EXTERNAL = [
  { f:'deliverables/index.html', t:'เอกสารส่งมอบรายงวด', ic:'📦',
    d:'เทมเพลตเอกสารส่งมอบ DTWU (38 ฉบับ) + เมืองสมุทร (36 ฉบับ) แยกตามงวด' }
];

/* ------------------------------------------------------------
   nav.js ถูกเรียกได้จาก 2 ที่ — ตั้ง window.AY_PREFIX ก่อนโหลดสคริปต์
     หน้าใน html/   : ไม่ต้องตั้ง (ค่าว่าง) — ลิงก์กันเองตรง ๆ
     หน้าสารบัญที่ราก: ตั้งเป็น 'html/'
   ------------------------------------------------------------ */
var AY_PREFIX = (typeof window !== 'undefined' && window.AY_PREFIX) || '';
function ay_url(f)    { return AY_PREFIX + f; }                       /* ลิงก์ไปหน้าใน html/ */
function ay_root(f)   { return (AY_PREFIX ? '' : '../') + f; }        /* ลิงก์ไปไฟล์นอก html/ */
var AY_HOME = ay_root('index.html');                                  /* หน้าสารบัญ */

/* ============================================================
   ส่วนแสดงผล — แถบเมนูบนทุกหน้า + กล่องค้นหาด่วน (กด /)
   หน้าสารบัญ (index.html) ตั้ง window.AY_NO_BAR = true เพื่อไม่ให้แถบนี้ขึ้น
   ============================================================ */
var AY = (function () {
  var CSS = [
    '.ay-nav{position:sticky;top:0;z-index:40;display:flex;align-items:center;gap:8px;flex-wrap:wrap;',
    '  background:rgba(255,255,255,.94);border:1px solid #d7dde2;border-radius:12px;',
    '  padding:7px 10px;margin:0 0 18px;font-family:"Sarabun","Segoe UI Thai","Leelawadee UI",Tahoma,sans-serif;',
    '  font-size:13px;box-shadow:0 2px 10px rgba(31,45,61,.07)}',
    /* หน้าที่ไม่มี .wrap (สไลด์ ฯลฯ) — จัดกลางและเว้นขอบให้เท่ากับเนื้อหา */
    'body>.ay-nav{width:calc(100% - 28px);max-width:1600px;margin:14px auto 16px}',
    '.ay-nav a{text-decoration:none}',
    '.ay-home{font-weight:800;color:#0a5252;padding:4px 9px;border-radius:8px}',
    '.ay-home:hover{background:#eef7f7}',
    '.ay-sep{width:1px;height:20px;background:#dfe5ea;flex:0 0 auto}',
    '.ay-grp{position:relative}',
    '.ay-grpbtn{display:flex;align-items:center;gap:6px;background:#f3f6f8;border:1px solid #dfe5ea;color:#1f2d3d;',
    '  font:inherit;font-weight:700;padding:4px 10px;border-radius:8px;cursor:pointer}',
    '.ay-grpbtn:hover{background:#eaf0f3}',
    '.ay-menu{display:none;position:absolute;left:0;top:calc(100% + 6px);min-width:280px;max-height:62vh;overflow:auto;',
    '  background:#fff;border:1px solid #d7dde2;border-radius:11px;box-shadow:0 12px 30px rgba(31,45,61,.17);padding:6px;z-index:50}',
    '.ay-menu.open{display:block}',
    '.ay-menu .gh{font-size:11px;font-weight:800;color:#8494a3;padding:7px 9px 3px;letter-spacing:.4px}',
    '.ay-menu a{display:flex;align-items:center;gap:7px;padding:6px 9px;border-radius:7px;color:#1f2d3d;font-size:13px}',
    '.ay-menu a:hover{background:#f1f5f7}',
    '.ay-menu a.cur{background:#0d6e6e;color:#fff}',
    '.ay-dot{width:8px;height:8px;border-radius:50%;flex:0 0 auto}',
    '.ay-sw{display:flex;align-items:center;gap:4px;flex-wrap:wrap}',
    '.ay-sw .lb{font-size:11.5px;color:#8494a3;font-weight:700;margin-right:2px}',
    '.ay-sw a{font-size:12px;font-weight:700;padding:3.5px 10px;border-radius:999px;border:1px solid #dfe5ea;color:#5b6b7b;background:#fff}',
    '.ay-sw a:hover{background:#f3f6f8}',
    '.ay-sw a.cur{color:#fff;border-color:transparent}',
    '.ay-spacer{flex:1 1 auto}',
    '.ay-find{background:#fff;border:1px solid #dfe5ea;color:#5b6b7b;font:inherit;font-size:12.5px;',
    '  padding:4px 11px;border-radius:8px;cursor:pointer}',
    '.ay-find:hover{background:#f3f6f8;color:#0a5252}',
    '.ay-find kbd{font-family:inherit;font-size:11px;background:#eef1f3;border:1px solid #dfe5ea;border-radius:4px;padding:0 4px;margin-left:5px}',
    '.ay-ov{display:none;position:fixed;inset:0;z-index:999;background:rgba(20,32,44,.45);',
    '  padding:12vh 16px 16px;font-family:"Sarabun","Segoe UI Thai","Leelawadee UI",Tahoma,sans-serif}',
    '.ay-ov.open{display:block}',
    '.ay-box{max-width:640px;margin:0 auto;background:#fff;border-radius:14px;overflow:hidden;box-shadow:0 24px 60px rgba(0,0,0,.3)}',
    '.ay-box input{width:100%;box-sizing:border-box;border:0;border-bottom:1px solid #e3e9ed;padding:15px 18px;font:inherit;font-size:16px;outline:none}',
    '.ay-res{max-height:56vh;overflow:auto;padding:6px}',
    '.ay-res a{display:flex;align-items:center;gap:9px;padding:9px 11px;border-radius:8px;color:#1f2d3d;text-decoration:none;font-size:13.5px}',
    '.ay-res a.hl{background:#eef7f7}',
    '.ay-res .nm{font-weight:600}',
    '.ay-res .mt{font-size:11.5px;color:#8494a3;margin-left:auto;white-space:nowrap}',
    '.ay-res .empty{padding:18px;color:#8494a3;font-size:13px;text-align:center}',
    '@media print{.ay-nav,.ay-ov{display:none!important}}',
    '@media(max-width:640px){.ay-find kbd{display:none}.ay-nav{font-size:12.5px}}'
  ].join('');

  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;' }[c];
    });
  }
  function cur() {
    var n = decodeURIComponent((location.pathname.split('/').pop() || ''));
    return n === '' ? 'index.html' : n;
  }
  function byFile(f) {
    for (var i = 0; i < AY_PAGES.length; i++) if (AY_PAGES[i].f === f) return AY_PAGES[i];
    return null;
  }
  function groupMeta(k) {
    for (var i = 0; i < AY_GROUPS.length; i++) if (AY_GROUPS[i].k === k) return AY_GROUPS[i];
    return { k: k, ic: '📄', t: k };
  }
  function siteOf(p) { return AY_SITES[p.s] || AY_SITES.all; }
  function inGroup(k) {
    return AY_PAGES.filter(function (p) { return p.g === k; });
  }
  function countBySite(s) {
    return AY_PAGES.filter(function (p) { return p.s === s; }).length;
  }
  function injectCSS() {
    if (document.getElementById('ay-css')) return;
    var st = document.createElement('style');
    st.id = 'ay-css';
    st.textContent = CSS;
    document.head.appendChild(st);
  }

  /* ---------- กล่องค้นหาด่วน ---------- */
  var ov, inp, res, hits = [], hi = 0;
  function buildOverlay() {
    ov = document.createElement('div');
    ov.className = 'ay-ov';
    ov.innerHTML = '<div class="ay-box"><input type="text" ' +
      'placeholder="พิมพ์ชื่อหน้า / ไซต์ / หมวด…   (↑↓ เลือก · Enter เปิด · Esc ปิด)" ' +
      'autocomplete="off" spellcheck="false"><div class="ay-res"></div></div>';
    document.body.appendChild(ov);
    inp = ov.querySelector('input');
    res = ov.querySelector('.ay-res');
    ov.addEventListener('mousedown', function (e) { if (e.target === ov) closeOv(); });
    inp.addEventListener('input', function () { paint(inp.value); });
    inp.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowDown') { hi = Math.min(hi + 1, hits.length - 1); mark(); e.preventDefault(); }
      else if (e.key === 'ArrowUp') { hi = Math.max(hi - 1, 0); mark(); e.preventDefault(); }
      else if (e.key === 'Enter' && hits[hi]) { location.href = hits[hi].href; }
      else if (e.key === 'Escape') { closeOv(); }
    });
  }
  /* รายการที่ค้นได้ = หน้าใน html/ + ลิงก์นอกโฟลเดอร์ (เอกสารส่งมอบ ฯลฯ) */
  function searchable() {
    var list = AY_PAGES.map(function (p) {
      var s = siteOf(p), g = groupMeta(p.g);
      return { href: ay_url(p.f), t: p.t, d: p.d || '', f: p.f,
               dot: s.c, meta: g.ic + ' ' + g.t + (p.k === 'slide' ? ' · สไลด์' : '') + ' · ' + s.ab };
    });
    return list.concat(AY_EXTERNAL.map(function (x) {
      return { href: ay_root(x.f), t: x.t, d: x.d || '', f: x.f,
               dot: '#e8743b', meta: (x.ic || '📁') + ' นอกโฟลเดอร์ html/' };
    }));
  }

  function paint(q) {
    q = (q || '').trim().toLowerCase();
    hits = searchable().filter(function (p) {
      if (!q) return true;
      return (p.t + ' ' + p.f + ' ' + p.d + ' ' + p.meta).toLowerCase().indexOf(q) >= 0;
    });
    hi = 0;
    if (!hits.length) {
      res.innerHTML = '<div class="empty">ไม่พบหน้าที่ตรงกับ “' + esc(q) + '”</div>';
      return;
    }
    res.innerHTML = hits.map(function (p, i) {
      return '<a href="' + p.href + '" class="' + (i === 0 ? 'hl' : '') + '">' +
        '<span class="ay-dot" style="background:' + p.dot + '"></span>' +
        '<span class="nm">' + esc(p.t) + '</span>' +
        '<span class="mt">' + esc(p.meta) + '</span></a>';
    }).join('');
  }
  function mark() {
    var a = res.querySelectorAll('a');
    for (var i = 0; i < a.length; i++) a[i].className = (i === hi ? 'hl' : '');
    if (a[hi] && a[hi].scrollIntoView) a[hi].scrollIntoView({ block: 'nearest' });
  }
  function openOv() {
    if (!ov) buildOverlay();
    inp.value = '';
    paint('');
    ov.classList.add('open');
    inp.focus();
  }
  function closeOv() { if (ov) ov.classList.remove('open'); }

  /* ---------- แถบเมนู ---------- */
  function navHTML() {
    var f = cur(), me = byFile(f), h = '';
    h += '<a class="ay-home" href="' + AY_HOME + '">🏠 สารบัญทั้งหมด</a>';

    if (me) {
      var g = groupMeta(me.g), sibs = inGroup(me.g);
      h += '<span class="ay-sep"></span>';
      h += '<span class="ay-grp"><button class="ay-grpbtn" type="button">' + g.ic + ' ' + esc(g.t) +
           ' <span style="color:#8494a3;font-weight:600">' + sibs.length + '</span> ▾</button>' +
           '<div class="ay-menu"><div class="gh">หน้าอื่นในหมวดนี้</div>';
      h += sibs.map(function (p) {
        var s = siteOf(p);
        return '<a href="' + ay_url(p.f) + '" class="' + (p.f === f ? 'cur' : '') + '">' +
          '<span class="ay-dot" style="background:' + s.c + '"></span>' + esc(p.t) +
          '<span style="margin-left:auto;font-size:11.5px;opacity:.7">' + esc(s.ab) +
          (p.k === 'slide' ? ' · สไลด์' : '') + '</span></a>';
      }).join('');
      h += '<div class="gh">ข้ามไปหมวดอื่น</div>';
      h += AY_GROUPS.filter(function (x) { return x.k !== me.g; }).map(function (x) {
        var first = inGroup(x.k)[0];
        if (!first) return '';
        return '<a href="' + ay_url(first.f) + '">' + x.ic + ' ' + esc(x.t) +
          '<span style="margin-left:auto;font-size:11.5px;opacity:.6">' + inGroup(x.k).length + '</span></a>';
      }).join('');
      h += '</div></span>';

      /* ปุ่มสลับไซต์ — หน้าเดียวกันของอีกไซต์ (จับคู่ด้วย b) */
      var fam = AY_PAGES.filter(function (p) { return p.b === me.b; });
      if (fam.length > 1) {
        var order = ['all', 'dtwu', 'msm', 'hisp', 'dtmu'];
        fam.sort(function (a, b) { return order.indexOf(a.s) - order.indexOf(b.s); });
        h += '<span class="ay-sep"></span><span class="ay-sw"><span class="lb">ไซต์</span>';
        h += fam.map(function (p) {
          var s = siteOf(p), on = (p.f === f);
          return '<a href="' + ay_url(p.f) + '" class="' + (on ? 'cur' : '') + '"' +
            (on ? ' style="background:' + s.c + '"' : '') +
            ' title="' + esc(p.t) + ' — ' + esc(s.t) + '">' + esc(s.ab) + '</a>';
        }).join('');
        h += '</span>';
      }
    }

    h += '<span class="ay-spacer"></span>';
    h += '<button class="ay-find" type="button">🔍 ค้นหาหน้า<kbd>/</kbd></button>';
    return h;
  }

  function bindKeys() {
    document.addEventListener('keydown', function (e) {
      var t = (e.target && e.target.tagName) || '';
      if (e.key === '/' && t !== 'INPUT' && t !== 'TEXTAREA' && !e.target.isContentEditable) {
        openOv(); e.preventDefault();
      } else if (e.key === 'Escape') {
        closeOv();
      }
    });
  }

  function initBar() {
    injectCSS();
    var host = document.getElementById('ay-nav');
    if (!host) {                    /* ไม่มี placeholder → แทรกบนสุดของ .wrap หรือ body */
      host = document.createElement('div');
      var p = document.querySelector('.wrap') || document.body;
      p.insertBefore(host, p.firstChild);
    }
    host.className = 'ay-nav';
    host.innerHTML = navHTML();

    var btn = host.querySelector('.ay-grpbtn');
    if (btn) {
      var menu = host.querySelector('.ay-menu');
      btn.addEventListener('click', function (e) { e.stopPropagation(); menu.classList.toggle('open'); });
      document.addEventListener('click', function () { menu.classList.remove('open'); });
    }
    host.querySelector('.ay-find').addEventListener('click', openOv);
    bindKeys();
  }

  function boot() {
    if (window.AY_NO_BAR) { injectCSS(); bindKeys(); return; }
    initBar();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();

  /* เปิดให้หน้าสารบัญเรียกใช้ได้ */
  return {
    esc: esc, cur: cur, byFile: byFile, groupMeta: groupMeta,
    siteOf: siteOf, inGroup: inGroup, countBySite: countBySite,
    open: openOv, close: closeOv, url: ay_url, root: ay_root
  };
})();
