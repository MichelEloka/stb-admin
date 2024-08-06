import { Component, Input, OnChanges, SimpleChanges, ViewChild, ElementRef } from '@angular/core';
import Chart from 'chart.js/auto';

interface ChartNode {
  label: string;
  data: number[];
}

@Component({
  selector: 'app-graphboard',
  standalone: true,
  templateUrl: './graphboard.component.html',
  styleUrls: ['./graphboard.component.scss']
})
export class GraphboardComponent implements OnChanges {
  @Input() nodes: ChartNode[] = [];
  @ViewChild('chartCanvas') chartCanvas!: ElementRef<HTMLCanvasElement>;
  
  private chart: Chart | null = null;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['nodes'] && this.chartCanvas) {
      this.updateChart();
    }
  }

  private updateChart(): void {
    const ctx = this.chartCanvas.nativeElement.getContext('2d');
    if (!ctx) return;

    if (this.chart) {
      this.chart.destroy();
    }

    const datasets = this.nodes.map(node => ({
      label: node.label,
      data: node.data,
      borderColor: this.getRandomColor(),
      backgroundColor: this.getRandomColor(0.2),
      fill: true
    }));

    this.chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: this.generateLabels(this.nodes[0]?.data.length || 0),
        datasets: datasets
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    });
  }

  private getRandomColor(alpha: number = 1): string {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }

  private generateLabels(count: number): string[] {
    return Array.from({ length: count }, (_, i) => `Label ${i + 1}`);
  }
}