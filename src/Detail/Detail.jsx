// NewPage.js
import React from 'react';
import { useTheme } from "@mui/material";
import Grid from '@mui/material/Grid2';
import { useLocation, useNavigate } from "react-router-dom";
import './Detail.css'
import { Button, IconButton } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';

function Detail() {
  const theme = useTheme();
  const location = useLocation();
  const { title } = location.state || {};
  const navigate = useNavigate(); // Hook untuk navigasi

  const handleBack = () => {
    navigate(-1); // Navigasi ke halaman sebelumnya
  };
  const limitsData = [
    {
      id: 1,
      title: 'Definisi Limit',
      content: `
  Limit adalah konsep dasar dalam kalkulus yang menggambarkan perilaku suatu fungsi ketika mendekati suatu nilai tertentu. 
  Contoh:
  \`\`\`
  lim(x → 2) (x^2 + 3x - 4) = 6
  \`\`\`
      `,
    },
    {
      id: 2,
      title: 'Teknik Menghitung Limit',
      content: `
  Beberapa teknik untuk menghitung limit:
  1. Substitusi Langsung:
     \`\`\`
     lim(x → 3) (x^2 + 2x - 1) = 3^2 + 2(3) - 1 = 14
     \`\`\`
  2. Faktorisasi:
     \`\`\`
     lim(x → 1) (x^2 - 1) / (x - 1) = x + 1
     Hasilnya: 2
     \`\`\`
      `,
    },
    {
      id: 3,
      title: 'Limit Tak Hingga',
      content: `
  Jika x → ∞, identifikasi suku dominan.
  Contoh:
  \`\`\`
  lim(x → ∞) (3x^2 + 5) / (2x^2 - 7) = 3/2
  \`\`\`
      `,
    },
  ];

  const derivativeData = [
    {
      id: 1,
      title: 'Definisi Turunan',
      content: `
  Turunan adalah konsep yang menggambarkan tingkat perubahan suatu fungsi terhadap variabelnya. Secara matematis:
  \`\`\`
  f'(x) = lim(h → 0) [(f(x + h) - f(x)) / h]
  \`\`\`
      `,
    },
    {
      id: 2,
      title: 'Aturan Dasar Turunan',
      content: `
  1. Konstanta:
     \`\`\`
     d/dx(c) = 0
     \`\`\`
  2. Fungsi pangkat:
     \`\`\`
     d/dx(x^n) = n * x^(n-1)
     \`\`\`
  3. Penjumlahan:
     \`\`\`
     d/dx[f(x) + g(x)] = f'(x) + g'(x)
     \`\`\`
      `,
    },
    {
      id: 3,
      title: 'Contoh Soal',
      content: `
  Soal: Tentukan turunan fungsi \( f(x) = 4x^3 - 2x + 1 \).
  Penyelesaian:
  \`\`\`
  f'(x) = 12x^2 - 2
  \`\`\`
      `,
    },
  ];

  const integralData = [
    {
      id: 1,
      title: 'Definisi Integral',
      content: `
  Integral adalah operasi kebalikan dari turunan yang digunakan untuk menghitung luas di bawah kurva atau akumulasi suatu nilai.
  1. **Integral Tak Tentu**:
     \`\`\`
     ∫ f(x) dx = F(x) + C
     \`\`\`
     di mana F'(x) = f(x).
  
  2. **Integral Tentu**:
     \`\`\`
     ∫[a,b] f(x) dx = F(b) - F(a)
     \`\`\`
     di mana F(x) adalah anti-turunan dari f(x).
      `,
    },
    {
      id: 2,
      title: 'Aturan Dasar Integral',
      content: `
  1. **Konstanta**:
     \`\`\`
     ∫ c dx = c * x + C
     \`\`\`
  
  2. **Pangkat**:
     \`\`\`
     ∫ x^n dx = x^(n+1) / (n+1) + C  (n ≠ -1)
     \`\`\`
  
  3. **Eksponensial**:
     \`\`\`
     ∫ e^x dx = e^x + C
     \`\`\`
  
  4. **Trigonometri**:
     \`\`\`
     ∫ sin(x) dx = -cos(x) + C
     ∫ cos(x) dx = sin(x) + C
     \`\`\`
      `,
    },
    {
      id: 3,
      title: 'Contoh Soal',
      content: `
  1. **Soal Integral Tak Tentu**:
     Tentukan ∫ (3x^2 + 2x + 1) dx.
     \`\`\`
     Jawaban: x^3 + x^2 + x + C
     \`\`\`
  
  2. **Soal Integral Tentu**:
     Hitung ∫[1,3] (2x + 1) dx.
     \`\`\`
     Jawaban: 10
     \`\`\`
      `,
    },
  ];
  
    
  return (
    <>
    <Grid container >

      {title === "limit" && (
        <div className="fadeIn" style={{ textAlign: "justify" }}>
          <h1 style={{textAlign:"center"}}>Limit</h1>
          {limitsData.map((limit) => (
          <div key={limit.id}>
            <h2>
              <p>{limit.title}</p>
            </h2>
            <pre style={{ whiteSpace: 'pre-wrap',backgroundColor: theme.palette.mode === "dark" ? "#424242" : "#eaf8f4"  }}>{limit.content} </pre>
          </div>
        ))}
        <Button
          variant="contained"
          color="primary"
          startIcon={<ArrowBack />}
          onClick={handleBack}
        >
          Kembali
        </Button>
        </div>
      )}
      {title === "turunan" && (
        <div className="fadeIn" style={{ textAlign: "justify" }}>
          <h1 style={{textAlign:"center"}}>Turunan</h1>
          {derivativeData.map((turunan) => (
          <div key={turunan.id}>
            <h2>
              <p>{turunan.title}</p>
            </h2>
            <pre style={{ whiteSpace: 'pre-wrap',backgroundColor: theme.palette.mode === "dark" ? "#424242" : "#eaf8f4"  }}>{turunan.content} </pre>
          </div>
        ))}
        <Button
          variant="contained"
          color="primary"
          startIcon={<ArrowBack />}
          onClick={handleBack}
        >
          Kembali
        </Button>
        </div>
      )}
      {title === "integral" && (
        <div className="fadeIn" style={{ textAlign: "justify" }}>
          <h1 style={{textAlign:"center"}}>Integral</h1>
          {integralData.map((integral) => (
          <div key={integral.id}>
            <h2>
              <p>{integral.title}</p>
            </h2>
            <pre style={{ whiteSpace: 'pre-wrap',backgroundColor: theme.palette.mode === "dark" ? "#424242" : "#eaf8f4" }}>{integral.content} </pre>
          </div>
        ))}
        <Button
          variant="contained"
          color="primary"
          startIcon={<ArrowBack />}
          onClick={handleBack}
        >
          Kembali
        </Button>
        </div>
      )}
      {!["limit", "turunan", "integral"].includes(title) && (
        <div className="fadeIn" style={{ textAlign: "justify" }}>
        <h1 style={{textAlign:"center"}}>Persamaan Linear</h1>
        
        <h2>Definisi Persamaan Linear</h2>
        <p className="text-with-line-break">
          Persamaan linear adalah persamaan matematika yang menyatakan hubungan linier
          antara dua variabel atau lebih. Bentuk umum dari persamaan linear dengan dua variabel adalah:
        </p>
        <p>
          <strong>ax + by + c = 0</strong>
        </p>
        <p>
          Di mana:
          <ul>
            <li><strong>a</strong>, <strong>b</strong>, dan <strong>c</strong> adalah konstanta,</li>
            <li><strong>x</strong> dan <strong>y</strong> adalah variabel.</li>
          </ul>
        </p>

        <h2>Persamaan Linear Satu Variabel</h2>
        <p>Bentuk: <strong>ax + b = 0</strong></p>
        <p ><strong>Langkah Penyelesaian:</strong></p>
        <ol>
          <li>Isolasi variabel <strong>x</strong>.</li>
          <li>Solusi: <strong>x = -b / a</strong></li>
        </ol>
        <p><strong>Contoh:</strong></p>
        <pre style={{ whiteSpace: 'pre-wrap',backgroundColor: theme.palette.mode === "dark" ? "#424242" : "#eaf8f4"  }}>
          3x + 6 = 0
          x = -6 / 3 = -2
        </pre>

        <h2>Persamaan Linear Dua Variabel</h2>
        <p>Bentuk: <strong>ax + by + c = 0</strong></p>
        <p>
          Representasi eksplisit:
          <strong>y = -a/b x - c/b</strong>
        </p>
        <p>Gradien: <strong>m = -a/b</strong></p>
        <p>Titik potong y: <strong>c' = -c/b</strong></p>
        <p><strong>Contoh:</strong></p>
        <pre style={{ whiteSpace: 'pre-wrap',backgroundColor: theme.palette.mode === "dark" ? "#424242" : "#eaf8f4"  }}>
          2x + 3y - 6 = 0
          y = -2/3 x + 2
        </pre>

        <h2>Sistem Persamaan Linear</h2>
        <p>
          Sistem persamaan linear adalah kumpulan dua atau lebih persamaan yang diselesaikan
          secara bersamaan.
        </p>
        <p><strong>Contoh:</strong></p>
        <pre style={{ whiteSpace: 'pre-wrap',backgroundColor: theme.palette.mode === "dark" ? "#424242" : "#eaf8f4"  }}>
          2x + y = 5
          x - y = 1

          Solusi: x = 2, y = 1
        </pre>
        <Button
          variant="contained"
          color="primary"
          startIcon={<ArrowBack />}
          onClick={handleBack}
        >
          Kembali
        </Button>
    
        </div>
      )}
    </Grid>
    </>
  );
  
}

export default Detail;
