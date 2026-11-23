document.addEventListener('DOMContentLoaded',()=>{document.querySelectorAll('.learning-frame').forEach(frame=>{const buttons=[...frame.querySelectorAll('.step-nav button')],panes=[...frame.querySelectorAll('.step-pane')],prev=frame.querySelector('.prev-step'),next=frame.querySelector('.next-step');let index=0;function show(i){index=Math.max(0,Math.min(panes.length-1,i));panes.forEach((x,j)=>x.classList.toggle('is-active',j===index));buttons.forEach((x,j)=>{x.setAttribute('aria-selected',String(j===index));x.tabIndex=j===index?0:-1});prev.disabled=index===0;next.disabled=index===panes.length-1;next.textContent=index===panes.length-1?'학습 완료':'다음 단계 →';}buttons.forEach((b,i)=>b.addEventListener('click',()=>show(i)));prev.addEventListener('click',()=>show(index-1));next.addEventListener('click',()=>show(index+1));show(0);});document.querySelectorAll('[data-answer]').forEach(b=>b.addEventListener('click',()=>{const input=document.getElementById(b.dataset.input),output=document.getElementById(b.dataset.output);if(!input||!output)return;const expected=Number(b.dataset.answer),value=Number(input.value);if(!input.value.trim()||!Number.isFinite(value)){output.textContent='숫자를 입력해 주세요.';return;}output.textContent=Math.abs(value-expected)<=Number(b.dataset.tolerance||.1)?'정답입니다. 아래 해설에서 해석도 확인하세요.':'값을 다시 확인해 보세요. 분모와 단위를 점검해 보세요.';}));});
// EP01 v1.3 report step: local-only comparison, no automated grading.
document.addEventListener('DOMContentLoaded',()=>{
  const field=document.getElementById('ep01-report');
  const submit=document.getElementById('ep01-report-submit');
  const feedback=document.getElementById('ep01-report-feedback');
  if(!field||!submit||!feedback)return;
  const count=document.getElementById('ep01-report-count');
  const message=document.getElementById('ep01-report-message');
  const copy=document.getElementById('ep01-report-copy');
  const checks=[...feedback.querySelectorAll('.report-checklist input')];
  const checkCount=document.getElementById('ep01-report-check-count');
  field.addEventListener('input',()=>{count.textContent=field.value.length+'자';submit.disabled=!field.value.trim();feedback.hidden=true;message.textContent='';});
  submit.addEventListener('click',()=>{if(!field.value.trim())return;copy.textContent=field.value;feedback.hidden=false;message.textContent='멘토 예시와 비교하고, 아래 기준으로 스스로 점검해 보세요.';});
  checks.forEach(c=>c.addEventListener('change',()=>{checkCount.textContent='자기점검 '+checks.filter(x=>x.checked).length+'/4개';}));
});
