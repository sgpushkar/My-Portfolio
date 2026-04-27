import {
  IconGlobe,
  IconPalette,
  IconBolt,
  IconReact,
  IconNode,
  IconPython,
  IconJava,
  IconFlask,
  IconDatabase,
  IconMongoDB,
  IconSQLite,
  IconEye,
  IconRobot,
  IconLlama,
  IconGithub,
  IconVercel,
  IconPostman,
  IconTrophy,
  IconBrain,
  IconMail,
  IconLinkedIn,
  IconTarget,
  IconMoon,
  IconHospital,
  IconArrowRight,
  IconChart,
  IconStar,
  IconCheck,
} from '@/components/icons';

interface IconMap {
  [key: string]: React.ComponentType<{ className?: string }>;
}

export const emojiToIcon: IconMap = {
  '🌐': IconGlobe,
  '🎨': IconPalette,
  '⚡': IconBolt,
  '⚛️': IconReact,
  '🟢': IconNode,
  '🐍': IconPython,
  '☕': IconJava,
  '🔥': IconFlask,
  '🐬': IconDatabase,
  '🍃': IconMongoDB,
  '🗃️': IconSQLite,
  '👁️': IconEye,
  '🤖': IconRobot,
  '🦙': IconLlama,
  '🐙': IconGithub,
  '▲': IconVercel,
  '📮': IconPostman,
  '🏆': IconTrophy,
  '🧠': IconBrain,
  '📧': IconMail,
  '💼': IconLinkedIn,
  '🎯': IconTarget,
  '🌙': IconMoon,
  '🏥': IconHospital,
  '→': IconArrowRight,
  '📈': IconChart,
  '⭐': IconStar,
  '✓': IconCheck,
  '✅': IconCheck,
};


export function getIcon(emoji: string): React.ComponentType<{ className?: string }> | null {
  return emojiToIcon[emoji] || null;
}
