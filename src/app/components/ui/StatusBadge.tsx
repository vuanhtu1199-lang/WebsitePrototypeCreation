import React from 'react';
import { CheckCircle2, Clock, AlertCircle, Loader2, XCircle } from 'lucide-react';

type BadgeVariant = 'success' | 'pending' | 'processing' | 'warning' | 'error' | 'info';

const CONFIG: Record<BadgeVariant, { bg: string; color: string; icon: React.FC<{ size: number }> }> = {
  success:    { bg: 'rgba(46,204,113,0.12)',  color: '#27AE60', icon: ({ size }) => <CheckCircle2 size={size} /> },
  pending:    { bg: 'rgba(230,126,34,0.12)',  color: '#E67E22', icon: ({ size }) => <Clock size={size} /> },
  processing: { bg: 'rgba(52,152,219,0.12)',  color: '#2980B9', icon: ({ size }) => <Loader2 size={size} /> },
  warning:    { bg: 'rgba(241,196,15,0.15)',  color: '#D4AC0D', icon: ({ size }) => <AlertCircle size={size} /> },
  error:      { bg: 'rgba(231,76,60,0.12)',   color: '#E74C3C', icon: ({ size }) => <XCircle size={size} /> },
  info:       { bg: 'rgba(46,204,113,0.08)',  color: '#2ECC71', icon: ({ size }) => <CheckCircle2 size={size} /> },
};

interface Props {
  variant: BadgeVariant;
  label: string;
  showIcon?: boolean;
  size?: 'sm' | 'md';
}

export function StatusBadge({ variant, label, showIcon = true, size = 'sm' }: Props) {
  const cfg = CONFIG[variant];
  const fontSize = size === 'sm' ? '11px' : '12px';
  const padding = size === 'sm' ? '3px 8px' : '4px 10px';
  const iconSize = size === 'sm' ? 11 : 12;

  return (
    <span style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: '4px',
      background: cfg.bg,
      color: cfg.color,
      fontSize,
      fontWeight: 600,
      padding,
      borderRadius: '6px',
      whiteSpace: 'nowrap',
    }}>
      {showIcon && <cfg.icon size={iconSize} />}
      {label}
    </span>
  );
}
