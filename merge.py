import sys
import re

with open('newDesign_App.tsx', 'r') as f:
    new_design = f.read()

with open('client/src/App.tsx', 'r') as f:
    main_design = f.read()

# 1. Extract new Header
header_match = re.search(r'(<header.*?</header>)', new_design, re.DOTALL)
new_header = header_match.group(1) if header_match else ''
new_header = new_header.replace('setActiveNav', 'handleNavigate')

# 2. Extract new Main
main_match = re.search(r'(<main.*?</main>)', new_design, re.DOTALL)
new_main = main_match.group(1) if main_match else ''
new_main = new_main.replace('<button className="flex items-center gap-2 bg-white text-black', '<button onClick={() => onNavigate(\'Check a Scam\')} className="flex items-center gap-2 bg-white text-black')
new_main = new_main.replace('<button className="flex items-center gap-2.5 text-gray-400 hover:text-white transition-colors text-[13px] font-medium">\n              <MessageIcon /> Message\n            </button>', '<button onClick={() => onNavigate(\'Check a Scam\')} className="flex items-center gap-2.5 text-gray-400 hover:text-white transition-colors text-[13px] font-medium">\n              <MessageIcon /> Message\n            </button>')
new_main = new_main.replace('<button className="flex items-center gap-2.5 text-gray-400 hover:text-white transition-colors text-[13px] font-medium">\n              <PhoneIcon /> Phone Call\n            </button>', '<button onClick={() => onNavigate(\'Check a Scam\')} className="flex items-center gap-2.5 text-gray-400 hover:text-white transition-colors text-[13px] font-medium">\n              <PhoneIcon /> Phone Call\n            </button>')
new_main = new_main.replace('<button className="flex items-center gap-2.5 text-gray-400 hover:text-white transition-colors text-[13px] font-medium">\n              <ScreenshotIcon /> Screenshot\n            </button>', '<button onClick={() => onNavigate(\'Check a Scam\')} className="flex items-center gap-2.5 text-gray-400 hover:text-white transition-colors text-[13px] font-medium">\n              <ScreenshotIcon /> Screenshot\n            </button>')

# 3. Create new HomePage component
new_homepage = f"""const HomePage = ({{ onNavigate }}: {{ onNavigate: (page: string) => void }}) => (
  <div className="flex flex-col flex-1">
    {{/* Banner is inside main in new design, let's just render main */}}
    {new_main}
    <Footer />
  </div>
)
"""

# 4. Replace HomePage in main_design
main_design = re.sub(r'const HomePage = .*?\n\)\n', new_homepage, main_design, flags=re.DOTALL)

# 5. Replace Header in App component
main_design = re.sub(r'<header.*?</header>', new_header, main_design, flags=re.DOTALL)

# 6. Replace Footer max-w
main_design = main_design.replace('max-w-7xl mx-auto flex flex-col', 'max-w-[110rem] mx-auto flex flex-col')

# 7. Add CheckShieldIcon if missing
if 'CheckShieldIcon' not in main_design:
    check_shield = """const CheckShieldIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
)
"""
    main_design = main_design.replace('// ── Shared Verify Card', check_shield + '\n// ── Shared Verify Card')

with open('client/src/App.tsx', 'w') as f:
    f.write(main_design)

print('Done')
