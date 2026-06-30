import React from 'react'

export function GenerateDate() {
  const options = {
    timeZone: "America/Sao_Paulo",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }
  const date = new Date().toLocaleDateString('pt-BR', options)

  return date;
}