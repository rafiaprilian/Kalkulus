// NewPage.js
import React from 'react';

function NewPage() {
  return (
    <div>
       <h1>Persamaan Linear</h1>
      
      <h2>Definisi Persamaan Linear</h2>
      <p>
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
      <p><strong>Langkah Penyelesaian:</strong></p>
      <ol>
        <li>Isolasi variabel <strong>x</strong>.</li>
        <li>Solusi: <strong>x = -b / a</strong></li>
      </ol>
      <p><strong>Contoh:</strong></p>
      <pre>
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
      <pre>
        2x + 3y - 6 = 0
        y = -2/3 x + 2
      </pre>

      <h2>Sistem Persamaan Linear</h2>
      <p>
        Sistem persamaan linear adalah kumpulan dua atau lebih persamaan yang diselesaikan
        secara bersamaan.
      </p>
      <p><strong>Contoh:</strong></p>
      <pre>
        2x + y = 5
        x - y = 1

        Solusi: x = 2, y = 1
      </pre>
      
    </div>
  );
}

export default NewPage;
